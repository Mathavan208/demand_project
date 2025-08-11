import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import courseData from '../data/courses.json';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeWeek, setActiveWeek] = useState(1);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const syllabusRef = useRef(null);
  const curriculumRef = useRef(null);

  useEffect(() => {
    const foundCourse = courseData.find(c => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [id]);

  useEffect(() => {
    if (course) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
      );

      gsap.fromTo(
        syllabusRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo(
        curriculumRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' }
      );
    }
  }, [course]);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-deep-blue">Course Not Found</h1>
          <Link to="/courses" className="text-purple-blue hover:underline mt-4 inline-block">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-deep-blue/10 to-white">
      <div className="container mx-auto px-4">
        <Link 
          to="/courses" 
          className="inline-flex items-center text-purple-blue hover:text-deep-blue mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div ref={imageRef}>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div ref={contentRef}>
            <h1 className="text-4xl font-bold text-deep-blue mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{course.description}</p>
            
            <a 
              href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-deep-blue to-purple-blue text-white font-bold py-3 px-8 rounded-lg hover:from-purple-blue hover:to-light-blue transition-all duration-300 inline-block"
            >
              Buy the Course
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={syllabusRef} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-deep-blue mb-6">Syllabus & Overview</h2>
            <p className="text-gray-600 leading-relaxed">{course.syllabus}</p>
          </div>

          <div ref={curriculumRef} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-deep-blue mb-6">Curriculum</h2>
            
            {/* Week Tabs */}
            <div className="flex space-x-2 mb-6">
              {course.curriculum.map((week, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeWeek === index + 1
                      ? 'bg-deep-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveWeek(index + 1)}
                >
                  Week {index + 1}
                </button>
              ))}
            </div>

            {/* Week Content */}
            <div className="space-y-4">
              {course.curriculum
                .filter((week, index) => index + 1 === activeWeek)
                .map((weekData, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-deep-blue mb-3">Week {weekData.week} Topics</h3>
                    <ul className="space-y-2">
                      {weekData.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="bg-deep-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                            {topicIndex + 1}
                          </span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;