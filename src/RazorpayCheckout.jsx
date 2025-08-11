import React, { useState } from "react";

const coursesList = [
  { name: "Java + Problem Solving", price: 199 },
  { name: "React", price: 199 },
  { name: "Node.js", price: 199 },
  { name: "JavaScript", price: 199 },
  { name: "Tailwind CSS", price: 199 },
  { name: "SQL", price: 199 },
  { name: "Python + Problem Solving", price: 199 },
  { name: "Communication Skills", price: 199 }
];

const RazorpayCheckout = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelect = (courseName) => {
    setSelectedCourses((prev) =>
      prev.includes(courseName)
        ? prev.filter((c) => c !== courseName)
        : [...prev, courseName]
    );
  };

  const totalPrice = selectedCourses.length * 199;

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course.");
      return;
    }

    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Key ID
      amount: totalPrice * 100, // Amount in paisa
      currency: "INR",
      name: "SkillBoost Academy",
      description: "Course Enrollment Payment",
      image: "https://your-logo-url.com", // Optional
      handler: function (response) {
        // ✅ Redirect to Google Form only if payment is successful
        window.location.href = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";
      },
      prefill: {
        name: "Student Name",
        email: "student@example.com",
        contact: "9999999999"
      },
      notes: {
        courses: selectedCourses.join(", ")
      },
      theme: {
        color: "#3399cc"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Selection</h2>
      {coursesList.map((course) => (
        <div key={course.name}>
          <label>
            <input
              type="checkbox"
              checked={selectedCourses.includes(course.name)}
              onChange={() => handleCourseSelect(course.name)}
            />
            {course.name} - ₹{course.price}
          </label>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button onClick={handlePayment} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayCheckout;