import { lazy } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from "./pages/CaseStudy";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import UnderConstruction from "./pages/UnderConstruction";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const Projects = lazy(() => import("./pages/Projects"));

const App = () => {
  const location = useLocation();
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <div className="overflow-x-hidden">
      <Analytics />
      <SpeedInsights/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-study/:name" element={<CaseStudy />} />
          <Route path="/case-study/:name/comming-soon" element={<UnderConstruction />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
