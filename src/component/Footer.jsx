import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // Get the current location

  // Determine which links to display based on the current page
  const renderLinks = () => {
    switch (location.pathname) {
      case '/about':
        return (
          <>
            <Link to='/Projects' className='hover:line-through'>Projects</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
      case '/Projects':
        return (
          <>
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
            <Link to='/Projects' className='hover:line-through'>Projects</Link>
          </>
        );
      default:
        return (
          <>
            <Link to='/Projects' className='hover:line-through'>Projects</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/about' className='text-white'>About</Link>
            <div className='w-full mx-5 h-[1px] bg-white'></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
    }
  };

  return (
    <div className='flex justify-between items-center w-full text-white text-lg font-roman mt-10 pr-10 pl-20'>
      {renderLinks()}
    </div>
  );
};

export default Footer;