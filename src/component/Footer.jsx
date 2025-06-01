import { motion } from 'framer-motion';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ color = 'white' }) => {
  const location = useLocation();

  const renderLinks = () => {
    switch (location.pathname) {
      case '/about':
        return (
          <>
            <Link to='/projects' className='hover:line-through'>Projects</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
      case '/projects':
        return (
          <>
            <Link to='/' className='hover:line-through md:hidden'>Home</Link>
            <div className='w-full mx-5 h-[1px] bg-white md:hidden'></div>
            <Link to='/about' className='hover:line-through'>About</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
      case '/contact-me':
        return (
          <>
            <Link to='/about' className='hover:line-through'>About</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/projects' className='hover:line-through'>Projects</Link>
          </>
        );
      default:
        return (
          <>
            <Link to='/' className='hover:line-through md:hidden'>Home</Link>
            <div className={`w-full m-2 md:hidden h-[1px] bg-${color}`}></div>
            <Link to='/projects' className='hover:line-through'>Projects</Link>
            <div className={`w-full m-2 md:mx-5 h-[1px] bg-${color}`}></div>
            <Link to='/about' className='hover:line-through'>About</Link>
            <div className={`w-full m-2 md:mx-5 h-[1px] bg-${color}`}></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className={`flex justify-between items-center w-full text-${color} text-lg font-roman mt-6 px-3`}
    >
      {renderLinks()}
    </motion.div>
  );
};

export default Footer;
