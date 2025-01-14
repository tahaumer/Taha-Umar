import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useState, useEffect } from 'react';
import SVG from './assets/icons/logoStroke.svg';

const App = () => {
  const location = useLocation();
  
  // State to control the loading screen visibility
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading after 1 second
    }, 1500); // 1 second delay for loading

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <img src={SVG} alt='text' />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
