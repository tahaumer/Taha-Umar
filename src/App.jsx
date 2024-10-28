import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();
  return (
    <div className='overflow-x-hidden'>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/contact-me' element={< Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App