import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power2.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={heroRef} className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-purple-blue to-light-blue to-light-purple opacity-90"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-32 w-80 h-80 bg-purple-blue mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute rounded-full -bottom-8 -left-32 w-80 h-80 bg-light-blue mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-light-purple mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 py-20 mx-auto text-center">
        <h1 
          ref={titleRef}
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          <span className="block">Empowering Your Future</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-light-blue">
            Through Technical Excellence
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-light-blue"
        >
          Master in-demand skills with our expert-led courses in Java, SQL, Python, React.js, Node.js, Tailwind CSS, and HR Communication.
        </p>
        
        <div 
          ref={buttonRef}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link 
            to="/courses"
            className="px-8 py-3 text-lg font-bold transition-all duration-300 transform bg-white rounded-full shadow-lg text-deep-blue hover:bg-gray-100 hover:scale-105"
          >
            Explore Courses
          </Link>
          <a 
            href="/instructors"
            className="px-8 py-3 text-lg font-bold text-white transition-all duration-300 transform bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-deep-blue hover:scale-105"
          >
            Meet Instructors
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;