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

  const handleViewDetails = (e) => {
    // Scroll to top when clicking view details
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const getStatusColor = () => {
    if (course.status === 'available') {
      return 'bg-green-500';
    } else {
      return 'bg-yellow-500';
    }
  };

  const getStatusText = () => {
    if (course.status === 'available') {
      return 'Available';
    } else {
      return 'Upcoming';
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
        course.status === 'upcoming' ? 'opacity-80' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor()} text-white`}>
            {getStatusText()}
          </span>
          {course.status === 'upcoming' && (
            <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
              {course.launchDate}
            </span>
          )}
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-deep-blue">{course.title}</h3>
        <p className="mb-4 text-gray-600">{course.description}</p>
        
        <div className="mb-4">
          <h4 className="mb-2 font-semibold text-deep-blue">Course Structure:</h4>
          <div className="flex space-x-2">
            {course.curriculum.map((week, index) => (
              <span key={index} className="bg-deep-blue text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Week {index + 1}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {course.status === 'available' ? (
            <>
              <Link 
                to={`/courses/${course.id}`}
                onClick={handleViewDetails}
                className="flex-1 px-4 py-2 text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-deep-blue to-purple-blue hover:from-purple-blue hover:to-light-blue"
              >
                View Details
              </Link>
              <a 
                href={course.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 text-center text-white transition-all duration-300 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Buy Now
              </a>
            </>
          ) : (
            <>
              <Link 
                to={`/courses/${course.id}`}
                onClick={handleViewDetails}
                className="flex-1 px-4 py-2 text-center text-gray-700 bg-gray-300 rounded-lg"
              >
                View Details
              </Link>
              <button 
                className="flex-1 px-4 py-2 text-gray-500 bg-gray-300 rounded-lg cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;