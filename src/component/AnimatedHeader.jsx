import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const AnimatedHeader = ({ title, initialY = 200, defaultSpanWidths = [400, 300], delay = 0.5 }) => {
  const [spanWidths, setSpanWidths] = useState(defaultSpanWidths);

  useEffect(() => {
    const updateSpanWidths = () => {
      // Determine the new widths based on window size
      const newWidths = window.innerWidth < 768 ? [150, 130] : defaultSpanWidths;

      // Only update state if the widths have actually changed
      if (JSON.stringify(newWidths) !== JSON.stringify(spanWidths)) {
        setSpanWidths(newWidths);
      }
    };

    // Initial check
    updateSpanWidths();

    // Add event listener for resize
    window.addEventListener('resize', updateSpanWidths);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', updateSpanWidths);
    };
  }, [defaultSpanWidths, spanWidths]); // Include spanWidths in the dependency array

  return (
    <motion.h1
      viewport={{ once: true }}
      initial={{ opacity: 1, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', delay }}
      className='xl:text-[170px] md:text-[140px] sm:text-[100px] text-[70px] text-white font-roman leading-[0.8] mb-10'
    >
      {title}
      {spanWidths.map((width, index) => (
        <motion.span
          key={index}
          viewport={{ once: true }}
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 0.8 + index * 0.2, ease: 'easeInOut', delay: delay + 1 }}
          className='h-[0.5px] bg-white block mb-2'
        />
      ))}
    </motion.h1>
  );
};

export default AnimatedHeader;
