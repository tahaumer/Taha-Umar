import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';

const App = () => {
  const location = useLocation();
  return (
    <div className='overflow-x-hidden'>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App