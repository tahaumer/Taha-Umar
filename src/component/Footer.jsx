import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ color='white' }) => {
  const location = useLocation(); // Get the current location

  // Determine which links to display based on the current page
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
            <Link to='/projects' className='hover:line-through'>Projects</Link>
            <div className={`w-full mx-5 h-[1px] bg-${color}`}></div>
            <Link to='/about' className='hover:line-through'>About</Link>
            <div className={`w-full mx-5 h-[1px] bg-${color}`}></div>
            <Link to='/contact-me' className='hover:line-through'>Contact</Link>
          </>
        );
    }
  };

  return (
    <div className={`flex justify-between items-center w-full text-${color} text-lg font-roman mt-10 pr-10 pl-20`}>
      {renderLinks()}
    </div>
  );
};

export default Footer;
