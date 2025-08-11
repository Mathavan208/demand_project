import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const animateHeader = () => {
    gsap.fromTo(
      '.nav-link',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  };

  return (
    <header className="bg-gradient-to-r from-deep-blue to-purple-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <Link to="/" className="hover:text-light-purple transition-colors">
              TechClasses
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="nav-link hover:text-light-purple transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="nav-link hover:text-light-purple transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/instructors" 
                  className="nav-link hover:text-light-purple transition-colors duration-300"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="nav-link hover:text-light-purple transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;