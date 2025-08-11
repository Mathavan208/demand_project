import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import instructorData from '../data/instructors.json';
import InstructorCard from '../components/InstructorCard';
import PageTitle from '../components/PageTitle';

const Instructors = () => {
  // Add page title
  useEffect(() => {
    document.title = 'Instructors - Pocket Mentor';
  }, []);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

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
      gridRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.4, ease: 'power2.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-deep-blue/10">
      <PageTitle title="Instructors" />
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center" ref={titleRef}>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-deep-blue">Our Instructors</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Learn from industry experts with real-world experience and a passion for teaching.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructorData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;