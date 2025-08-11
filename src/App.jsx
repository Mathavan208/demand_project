import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/instructors" element={<Instructors />} />
         
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;