import { motion, useIsPresent } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import zoaImg from '../assets/images/zoa.jpg';
import sdsImg from '../assets/images/sds.png';
import toolImg from '../assets/images/tool.png';
import tryboostingImg from '../assets/images/tryboosting.png';

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
  }
};

const projectList = [
  {
    title: "Studio Platform",
    link: "https://snowdreamstudios.com/",
    img: sdsImg,
    textColor: "#05CAFA",
    name: "Snow Dream Studios"
  },
  {
    title: "Clinic Management Suite",
    link: "https://zoa.ai/",
    img: zoaImg,
    textColor: "#2abec8",
    name: "ZOA"
  },
  {
    title: "Calculation Platform",
    link: "https://tool-matrix.vercel.app/",
    img: toolImg,
    textColor: "#D9784E",
    name: "Tool Matrix"
  },
  {
    title: "Game Boosting",
    link: "https://tryboosting.com/",
    img: tryboostingImg,
    textColor: "#66FCF1",
    name: "Try Boosting"
  },
  {
    title: "Trading Charts Web",
    link: "https://forexsource.net/",
    img: tryboostingImg,
    textColor: "#CD0511",
    name: "Forex Source"
  }
];

const Projects = () => {
  const isPresent = useIsPresent();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  return (
    <>
      <div className='container pl-20'>
        <div className='fixed left-0 h-screen py-20'>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInFromLeft} viewport={{ once: true }} className='flex flex-col justify-between h-full text-white font-firaCode py-5 font-extralight'>
            <Link to='/' className='w-fit -rotate-90 hover:line-through ml-3 tracking-[0.2em]'>Home</Link>
            <span className='w-[200px] -ml-16 h-[0.5px] bg-neutral1 block -rotate-90'></span>
            <p className='w-fit -rotate-90 -ml-5'>© TAHA | 2024</p>
          </motion.div>
        </div>
        <div className='p-20'>
          <div className='w-[60%] z-10 relative'>
            <motion.h1 viewport={{ once: true }} initial={{ opacity: 1, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} className='text-[170px] text-white font-roman leading-[0.8] mb-10'>Projects
              <motion.span viewport={{ once: true }} initial={{ width: 0 }} animate={{ width: 400 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }} className='h-[0.5px] bg-white block mb-2'></motion.span>
              <motion.span viewport={{ once: true }} initial={{ width: 0 }} animate={{ width: 300 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }} className='h-[0.5px] bg-white block'></motion.span>
            </motion.h1>
            <div className='bg-primary relative z-10 pr-10'>
              <div className="text-white">
                <p className='text-white font-openSans font-thin'>
                  Welcome to the Projects Showcase! Here, you’ll find a curated collection of creative and impactful projects, each representing my commitment to innovation, quality, and creativity. This page serves as a window into my diverse capabilities, featuring both past and ongoing work across various fields. Whether it's web design, application development, or visual storytelling, each project is crafted with passion and precision to deliver value and inspiration. Dive into the details, explore unique features, and discover how I bring ideas to life!
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-x-3 gap-y-10 flex-wrap bg-primary z-10 relative pt-5'>
            {projectList.map((project, index) => (
              <div key={index} className='w-[400px]'>
                <h5 className="mb-4 text-2xl font-roman font-bold text-white">{project.title}:</h5>
                <Link to={project.link} target="_blank" className="relative grid h-[20rem] group max-w-sm flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
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
