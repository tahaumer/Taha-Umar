import { useEffect, useState } from 'react';
import Button from '../component/Button'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkdin from '../assets/icons/linkdin.svg'
import ExploreBtn from '../component/ExploreBtn'
import Navbar from '../component/Navbar';
import { motion, useIsPresent } from "framer-motion";
import { Link } from 'react-router-dom';


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 1,
    },
  },
};

const staggerContainer2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.5
    },
  },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const fadeInFromBottom2 = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 1.7, ease: "easeInOut" },
      y: { duration: 2, ease: "easeInOut" }
    }
  },
};


const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
};

const Home = () => {
  const scrollToBottomSlowly = () => {
    const totalHeight = document.body.scrollHeight;
    const currentPosition = window.scrollY;
    const distance = totalHeight - currentPosition;
    const duration = 3000; // Increase duration for a more noticeable effect
    let start = null;

    const slowScroll = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      // Use the easing function to calculate the current position
      const step = Math.easeOutCubic(progress, currentPosition, distance, duration);
      window.scrollTo(0, step);

      // Continue the animation until the duration is reached
      if (progress < duration) {
        window.requestAnimationFrame(slowScroll);
      } else {
        // Ensure it ends exactly at the bottom
        window.scrollTo(0, totalHeight);
      }
    };

    window.requestAnimationFrame(slowScroll);
  };
  // Easing function that starts slow and accelerates
  Math.easeOutCubic = (t, b, c, d) => {
    t /= d;
    return c * (1 - Math.pow(1 - t, 3)) + b; // Adjusted to ease out
  };

  const getXOffset = () => (window.innerWidth < 700 ? -10 : -100);
  const getXOffsetDelay = () => (window.innerWidth < 700 ? 1 : 1.5);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: getXOffset() },
    visible: { opacity: 1, x: 0 },
  };

  const isPresent = useIsPresent();
  return (
    <div className='relative w-full'>
      <Navbar />
      <div className='absolute -top-36 -right-12 w-[200px] h-[200px] blur-[0.6px] border border-neutral2 rounded-full'></div>
      <motion.div initial={{ scaleX: 1 }} animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }} exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }} style={{ originX: isPresent ? 0 : 1 }} className="privacy-screen" />
      <div className="container h-[80vh] flex flex-col justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInFromTop} className='lg:hidden mb-6'>
          <Button text='Projects' redirectUrl='/projects'/>
        </motion.div>
        <div className='flex items-center justify-between'>
          <h1 className='text-[10vw] 2xl:text-[150px] font-firaCode font-bold tracking-tighter text-secondary leading-none fade-in-left'>Full-stack</h1>
          <motion.div initial="hidden" animate="visible" variants={fadeInFromTop} className='hidden lg:block'>
            <Button text='Projects' redirectUrl="/projects" />
          </motion.div>
        </div>
        <div className='flex items-center justify-between font-openSans font-medium lg:text-base text-sm'>
          <motion.div className='pr-3 hidden lg:block' initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
              Hi, I'm <span className="text-secondary italic">Taha Umar</span>, a Web Developer with <span className="text-secondary italic">over three years</span>&nbsp;
            </motion.p>
            <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
              of experience in crafting responsive and user-friendly websites.&nbsp;
            </motion.p>
            <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
              I’m passionate about <span className="text-secondary italic">coding</span>, learning new <span className="text-secondary italic">technologies</span>, &nbsp;
            </motion.p>
            <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
              and delivering effective digital solutions.
            </motion.p>
          </motion.div>
          <h1 className='text-[10vw] 2xl:text-[150px] font-firaCode text-right w-full font-bold tracking-tighter text-secondary leading-none fade-in-right'>Developer</h1>
        </div>
        <motion.div className='pr-3 lg:hidden block mt-3' initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
            Hi, I'm <span className="text-secondary italic">Taha Umar</span>, a Web Developer with <span className="text-secondary italic">over three years</span>&nbsp;
          </motion.p>
          <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
            of experience in crafting responsive and user-friendly websites.&nbsp;
          </motion.p>
          <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
            I’m passionate about <span className="text-secondary italic">coding</span>, learning new <span className="text-secondary italic">technologies</span>, &nbsp;
          </motion.p>
          <motion.p className="text-neutral1 inline" variants={fadeInFromBottom}>
            and delivering effective digital solutions.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className='flex flex-wrap justify-evenly items-center mt-10 gap-7'>
          <motion.button variants={fadeInFromBottom}>
            <Link to='https://github.com/tahaumer' className='flex gap-3 w-fit cursor-pointer text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900'>
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              Github
            </Link>
          </motion.button>
          <motion.button variants={fadeInFromBottom}>
            <Link to='www.linkedin.com/in/taha-umer' className='flex gap-3 w-fit cursor-pointer text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900'>
              <img src={linkdin} width={20} alt="linkdin" />
              Linkdin
            </Link>
          </motion.button>
          <motion.button variants={fadeInFromBottom}>
            <Link to='https://www.facebook.com/taha.umer.357' className='flex gap-3 w-fit cursor-pointer text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900'>
              <img src={facebook} width={23} alt="fb" />
              Facebook
            </Link>
          </motion.button>
          <motion.button variants={fadeInFromBottom}>
            <Link to='https://www.instagram.com/_taha_umer_/' className='flex gap-3 w-fit cursor-pointer text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900'>
              <img src={instagram} width={20} alt="insta" />
              Instagram
            </Link>
          </motion.button>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }} onClick={scrollToBottomSlowly} className='flex justify-center items-center'>
        <span className='text-2xl group text-white font-roman blur-[0.4px] cursor-pointer'>
          Explore
          <span className='block group-hover:w-3/4 w-0 transition-all ease-linear duration-300 h-[0.5px] bg-white'></span>
        </span>
        <ExploreBtn />
      </motion.div>
      <div className='container flex py-20' id='explore'>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInFromLeft} transition={{ delay: getXOffsetDelay(), duration: 1 }} className='flex w-[61px] -ml-5 sm:ml-0 lg:w-auto flex-col justify-between h-[500px] text-white font-mono py-5 font-extralight'>
          <p className='w-fit -rotate-90'>Explore</p>
          <span className='w-[200px] -ml-16 h-[0.5px] bg-neutral1 block -rotate-90'></span>
          <p className='w-fit -rotate-90 sm:-ml-5 -ml-8 whitespace-nowrap'>© TAHA | 2024</p>
        </motion.div>
        <div className='w-full lg:flex'>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer2} className=' lg:h-full text-neutral1 lg:flex items-start flex-col justify-end font-firaCode leading-6 text-pretty pb-10' >
            <motion.div className='inline' variants={fadeInFromBottom2}>Welcome to the Explore section, where my</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>journey as a Web Developer unfolds. Here,</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>I share my fascination with design and</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>technology, highlighting the projects</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>that inspire me. Each creation is a</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>testament to my dedication to crafting</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>engaging digital experiences. Dive in and</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>discover the unique stories behind my</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>work, as I continue to evolve and embrace</motion.div>
            <motion.div className='inline' variants={fadeInFromBottom2}>new challenges.</motion.div>
          </motion.div>
          <div className='lg:text-[10vw] text-[12vw] 2xl:text-[150px] lg:pl-20  text-white font-roman leading-tight whitespace-nowrap'>
            <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} ><Link to="/about" className='hover:tracking-widest transition-all duration-300 w-fit'>ABOUT</Link></motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} ><Link to="/projects" className='hover:tracking-widest transition-all duration-300 w-fit'>Projects</Link></motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} ><Link to="/contact-me" className='hover:tracking-widest transition-all duration-300 w-fit'>Contact</Link></motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home