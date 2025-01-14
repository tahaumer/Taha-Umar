import { motion, useIsPresent } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundShapes2 from '../component/background2'
import '../App.css';
import zoaImg from '../assets/images/zoa.jpg';
import sdsImg from '../assets/images/sds.png';
import toolImg from '../assets/images/tool.png';
import forexImg from '../assets/images/Forex-Source.png';
import tryboostingImg from '../assets/images/tryboosting.png';
import pngtotextImg from '../assets/images/pngtotext.png';
import estorefoamImg from '../assets/images/estorefoam.png';
import cushcoreImg from '../assets/images/cushcore.png';
import musafirImg from '../assets/images/musafir.png'
import algoframeImg from '../assets/images/algoframe.png'
import beatsImg from '../assets/images/beats.png'
import AnimatedHeader from '../component/AnimatedHeader';
import Footer from '../component/Footer';

const projectList = [
  {
    title: "Studio Platform",
    link: "https://snowdreamstudios.com/",
    img: sdsImg,
    textColor: "#05CAFA",
    name: "Snow Dream Studios"
  },
  {
    title: "Calculation Platform",
    link: "https://tool-matrix.vercel.app/",
    img: toolImg,
    textColor: "#D9784E",
    name: "Tool Matrix"
  },
  {
    title: "Clinic Management Suite",
    link: "https://zoa.ai/",
    img: zoaImg,
    textColor: "#2abec8",
    name: "ZOA"
  },
  {
    title: "Tire Insert Store",
    link: "https://cushcore.com/",
    img: cushcoreImg,
    textColor: "#7ec141",
    name: "CushCore"
  },
  {
    title: "Game Boosting",
    link: "https://tryboosting.com/",
    img: tryboostingImg,
    textColor: "#66FCF1",
    name: "Try Boosting"
  },
  {
    title: "Image to Text Converter",
    link: "https://pngtotext.com/",
    img: pngtotextImg,
    textColor: "#44b1e5",
    name: "Png to Text"
  },
  {
    title: "E-Commerce Foam's Store",
    link: "https://estorefoam.co.uk/",
    img: estorefoamImg,
    textColor: "#fff",
    name: "E-Store Foam"
  },
  // {
  //   title: "A Market Place",
  //   link: "https://secondluv.pk/",
  //   img: algoframeImg,
  //   textColor: "#37c668",
  //   name: "AlgoFrame"
  // },
  {
    title: "Trading Charts Web",
    link: "https://forexsource.net/",
    img: forexImg,
    textColor: "#fff",
    name: "Forex Source"
  },
  {
    title: "Practice - 1",
    link: "https://musafir-pakistan.vercel.app/",
    img: musafirImg,
    textColor: "#9DE793",
    name: "Musafir"
  },
  {
    title: "Practice - 2",
    link: "https://beats-headphones-ten.vercel.app/",
    img: beatsImg,
    textColor: "#fff",
    name: "Beats Headphones"
  },
];

const Projects = () => {
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
      <div className='container pl-10'>

        <div className='fixed left-0 h-screen py-20'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            transition={{ delay: xOffsetDelay, duration: 1 }}
            className="flex w-[61px] -ml-4 sm:ml-0 lg:w-auto flex-col justify-between h-[500px] text-white font-mono py-5 font-extralight"
          >
            <Link to="/" className="w-fit -rotate-90 pt-8">Home</Link>
            <span className="w-[200px] -ml-16 h-[0.5px] bg-neutral1 block -rotate-90"></span>
            <p className="w-fit -rotate-90 md:-ml-5 -ml-7 whitespace-nowrap">© TAHA | 2025</p>
          </motion.div>
        </div>
        <div className='py-10 xl:p-20'>
          <BackgroundShapes2 numberOfParticles='20' />
          <div className='lg:w-[60%] z-10 relative'>
            <AnimatedHeader
              title="Projects"
              initialY={200}
              spanWidths={[400, 300]}
              delay={0.5}
            />
            <div className='bg-primary relative z-10 pr-10'>
              <div className="text-white">
                <p className='text-white font-openSans font-thin'>
                  Welcome to the Projects Showcase! Here, you’ll find a curated collection of creative and impactful projects, each representing my commitment to innovation, quality, and creativity. This page serves as a window into my diverse capabilities, featuring both past and ongoing work across various fields. Whether it's web design, application development, or visual storytelling, each project is crafted with passion and precision to deliver value and inspiration. Dive into the details, explore unique features, and discover how I bring ideas to life!
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 gap-y-10 flex-wrap bg-primary z-10 relative pt-5'>
            {projectList.map((project, index) => (
              <div key={index}>
                <h5 className="mb-4 text-2xl font-roman font-bold text-white">{project.title}:</h5>
                <Link to={project.link} target="_blank" className="relative grid h-[10rem] md:h-[20rem] group max-w-sm flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                  <div className="absolute inset-0 m-0 h-full w-full group-hover:scale-110 transition-all duration-500 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${project.img})` }}>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                  </div>
                  <div className="relative text-center px-6 py-14 md:px-12">
                    <h2 className="mb-6 text-3xl font-bold font-openSans" style={{ color: project.textColor }}>
                      {project.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
  );
};

export default Projects;
