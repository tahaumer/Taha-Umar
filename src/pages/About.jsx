import { motion, useIsPresent } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { TypeAnimation } from 'react-type-animation';
import Button from '../component/Button';
import myImage from '../assets/images/taha.png'
import AnimatedHeader from '../component/AnimatedHeader';
import Footer from '../component/Footer';
import BackgroundShapes2 from '../component/background2'

const fadeInFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
  }
};

const About = () => {
  const isPresent = useIsPresent();
  const [xOffset, setXOffset] = useState(getXOffset());
  const [xOffsetDelay, setXOffsetDelay] = useState(getXOffsetDelay());

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setXOffset(getXOffset());
      setXOffsetDelay(getXOffsetDelay());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Declare functions above their first usage
  function getXOffset() {
    return window.innerWidth < 700 ? -10 : -100;
  }

  function getXOffsetDelay() {
    return window.innerWidth < 700 ? 1 : 1.5;
  }

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: xOffset },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1224px] xl:max-w-[1380px] 2xl:max-w-[1536px] md:pl-20 pl-14 mx-auto">

        <div className='fixed left-0 h-screen pt-20'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            transition={{ delay: xOffsetDelay, duration: 1 }}
            className="flex w-[61px] -ml-4 sm:ml-0 lg:w-auto flex-col justify-between h-[500px] text-white font-mono py-5 font-extralight"
          >
            <Link to="/" className="w-fit -rotate-90 pt-8">Home</Link>
            <span className="w-[200px] -ml-16 h-[0.5px] bg-neutral1 block -rotate-90"></span>
            <p className="w-fit -rotate-90 -ml-5 whitespace-nowrap">© TAHA | 2025</p>
          </motion.div>
        </div>
        <div className='flex py-10 xl:p-20 pb-0 space-x-10 relative'>
          <BackgroundShapes2 numberOfParticles='20' />
          <div className='lg:w-[60%] z-10 relative'>
            <AnimatedHeader
              title="About"
              initialY={200}
              spanWidths={[400, 300]}
              delay={0.5}
            />
            <div className='bg-primary relative pr-3 z-10'>
              <div className="text-white xl:text-[50px] sm:text-[30px] text-lg font-roman leading-none">
                <TypeAnimation
                  sequence={[
                    `I'm Taha. A Developer`,
                    1000,
                    `I'm Taha. A Maker`,
                    1000,
                    `I'm Taha. A Problem Solver`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={fadeInFromRight} className='lg:hidden block w-[200px] md:w-[384px] h-fit shadow-custom mt-7'>
                  <img src={myImage} alt="" className='object-contain object-center' />
                </motion.div>
              </div>
              <p className='my-8 pr-3 text-white font-openSans font-thin'>A dedicated Front-End Developer with 2 years of solid experience, merging creativity and code to build dynamic, responsive, and user-focused web applications.</p>
              <p className='sm:mt-12 mt-3 text-white font-roman text-3xl font-thin'>Who Am I?</p>
              <p className='mb-8 mt-4 pr-3 text-white font-openSans font-thin'>I thrive on bringing ideas to life through interactive and modern web experiences. With strong expertise in React.js, Next.js, and PHP Laravel, I build powerful, efficient, and scalable applications. My skill set extends to HTML, CSS, and JavaScript, complemented by a deep understanding of Tailwind CSS for streamlined and adaptive styling.</p>
              <p className='sm:mt-12 mt-3 text-white font-roman text-3xl font-thin'>What Drives Me?</p>
              <p className='mb-8 mt-4 pr-3 text-white font-openSans font-thin'>My love for problem-solving and continuous learning fuels my passion for development. I find joy in tackling complex projects, collaborating with teams, and crafting solutions that not only meet technical standards but provide an exceptional user experience.</p>
              <h3 className='text-white lg:text-[50px] sm:text-[30px] text-lg pr-3 leading-tight text-pretty border-l pl-5 font-roman'>“There is nothing so useless as doing efficiently that which should not be done at all.”</h3>
              <p className='sm:mt-12 mt-5 text-white font-roman text-3xl font-thin'>Experience</p>
              <p className='mb-8 mt-4 text-white pr-3 font-openSans font-thin'>- Degree in Computer Science. <br />
                - 2 years experience in Web Development.
              </p>
              <p className='sm:mt-12 mt-3 text-white font-roman text-3xl font-thin'>Skills</p>
              <p className='mb-8 mt-4 pr-3 text-white font-openSans font-thin'>
                Front-End Development / React.js / Next.js / Back-End Development / PHP Laravel / Styling & Animations / Tailwind CSS / Framer Motion / Full-Stack Solutions / MongoDB / MySQL (phpMyAdmin) / Web Technologies / HTML and CSS / JavaScript / Responsive Design / Web App Optimization / Version Control / Git / Collaborative Development / API Integration
              </p>
              <Button text="My CV" icon downloadUrl="/Taha Umar CV.pdf" />
            </div>
          </div>
          <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={fadeInFromRight} className='hidden lg:block w-[384px] h-fit shadow-custom'>
            <img src={myImage} alt="" className='object-contain object-center' />
          </motion.div>
        </div>
        <Footer />
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  )
}

export default About