import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import workshopData from '../data/workshops.json';
import WorkshopCard from '../components/WorkshopCard';
import PageTitle from '../components/PageTitle';

const Workshops = () => {
  // Add page title
  useEffect(() => {
    document.title = 'GSAP Workshops - Pocket Mentor';
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

  const availableWorkshops = workshopData.filter(workshop => workshop.status === 'available');
  const upcomingWorkshops = workshopData.filter(workshop => workshop.status === 'upcoming');

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-deep-blue/10 to-white">
      <PageTitle title="GSAP Workshops" />
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" ref={titleRef}>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-deep-blue">Workshops</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
           Free workshops  on newer libraries and tech stacks
          </p>
        </div>

        {/* Available Workshops Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center text-2xl font-bold md:text-3xl text-deep-blue">
              <span className="w-3 h-3 mr-3 bg-green-500 rounded-full"></span>
              Available Workshops
            </h2>
            <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
              {availableWorkshops.length} Workshops
            </span>
          </div>
          
          <div ref={availableGridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {availableWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>

        {/* Upcoming Workshops Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center text-2xl font-bold md:text-3xl text-deep-blue">
              <span className="w-3 h-3 mr-3 bg-yellow-500 rounded-full"></span>
              Upcoming Workshops
            </h2>
            <span className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
              {upcomingWorkshops.length} Workshops
            </span>
          </div>
          
          <div ref={upcomingGridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>

        {/* Workshop Statistics */}
       
        </div>
   
    </section>
  );
};

export default Workshops;