import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const CourseCard = ({ course }) => {
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-deep-blue mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-deep-blue mb-2">Course Structure:</h4>
          <div className="flex space-x-2">
            {course.curriculum.map((week, index) => (
              <span key={index} className="bg-deep-blue text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Week {index + 1}
              </span>
            ))}
          </div>
        </div>
        
        <Link 
          to={`/courses/${course.id}`}
          className="inline-block bg-gradient-to-r from-deep-blue to-purple-blue text-white px-4 py-2 rounded-lg hover:from-purple-blue hover:to-light-blue transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;