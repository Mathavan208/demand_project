import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import courseData from '../data/courses.json';
import CourseCard from '../components/CourseCard';
import PageTitle from '../components/PageTitle';

const Courses = () => {
  // Add page title
  useEffect(() => {
    document.title = 'Courses - Pocket Mentor';
  }, []);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const availableGridRef = useRef(null);
  const upcomingGridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
    );

    gsap.fromTo(
      [availableGridRef.current, upcomingGridRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.4, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  const availableCourses = courseData.filter(course => course.status === 'available');
  const upcomingCourses = courseData.filter(course => course.status === 'upcoming');

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-deep-blue/10 to-white">
      <PageTitle title="Courses" />
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" ref={titleRef}>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-deep-blue">Our Courses</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Explore our comprehensive range of technical courses designed to boost your career.
          </p>
        </div>

        {/* Available Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center text-2xl font-bold md:text-3xl text-deep-blue">
              <span className="w-3 h-3 mr-3 bg-green-500 rounded-full"></span>
              Available Courses
            </h2>
            <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
              {availableCourses.length} Courses
            </span>
          </div>
          
          <div ref={availableGridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Upcoming Courses Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex text-2xl font-bold md:text-3xl text-deep-blue indicators">
              <span className="w-3 h-3 mr-3 bg-yellow-500 rounded-full"></span>
              Upcoming Courses
            </h2>
            <span className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
              {upcomingCourses.length} Courses
            </span>
          </div>
          
          <div ref={upcomingGridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {/* Notification for upcoming courses */}
       
        </div>

        {/* Course Statistics */}
        <div className="p-8 mt-16 text-white bg-gradient-to-r from-deep-blue to-purple-blue rounded-xl">
          <h3 className="mb-6 text-2xl font-bold text-center">Why Choose Our Courses?</h3>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">4</div>
              <p>Available Courses</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">3</div>
              <p>Upcoming Courses</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">2</div>
              <p>Week Duration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;