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
import CaseStudyMain from '../component/CaseStudyMain';

  const projectList = [
    { title: "Tool Matrix", link: "https://tool-matrix.vercel.app/", img: toolImg, textColor: "text-[#fff]", bgColor: "from-[#d9784e94] to-[#d9784e63]", btnPosition: 'flex-col items-end justify-end', transition: '-top-10 left-5', position: 'translate-y-5 group-hover:translate-y-0', opacity: 'opacity-20',origin: 'true' },
    { title: "Snow Dream Studios", link: "https://snowdreamstudios.com/", img: sdsImg, textColor: "text-[#fff]", bgColor: "from-[#05c9fa8d] to-[#05c9fa2a]", btnPosition: 'flex-col items-start', transition: '-top-10 right-5', position: 'translate-y-5 group-hover:translate-y-0', opacity: 'opacity-20' },
    { title: "ZOA - Managment Suite", link: "https://zoa.ai/", img: zoaImg, textColor: "text-[#2abec8]", bgColor: "from-[#09254441] to-[#092544]", btnPosition: 'flex-col items-start', transition: '-bottom-3 -right-12', position: 'translate-x-5 group-hover:translate-x-0', opacity: 'opacity-50',origin: 'true' },
    { title: "Cush Core", link: "https://cushcore.com/", img: cushcoreImg, textColor: "text-[#fff]", bgColor: "from-[#7fc141b9] to-[#7fc14137]", btnPosition: 'flex-col items-start', transition: '-bottom-3 -right-12', position: 'translate-y-5 group-hover:translate-y-0', opacity: 'opacity-10' },
    { title: "Try Boosting", link: "https://tryboosting.com/", img: tryboostingImg, textColor: "text-[#fff]", bgColor: "from-[#66fcf291] to-[#66fcf222]", btnPosition: 'flex-col items-end justify-start', transition: '-bottom-3 -right-12', position: '-translate-y-5 group-hover:translate-y-0', opacity: 'opacity-10', origin: 'true' },
    { title: "PNG to TEXT", link: "https://pngtotext.com/", img: pngtotextImg, textColor: "text-[#44b1e5]", bgColor: "from-[#114e7dd7] to-[#114e7d75]", btnPosition: 'flex-col items-start', transition: '-top-10 right-5', position: 'translate-x-5 group-hover:translate-x-0', opacity: 'opacity-20' },
    { title: "E Srore Foam", link: "https://estorefoam.co.uk/", img: estorefoamImg, textColor: "text-[#dfe1e1]", bgColor: "from-[#a3d1ff96] to-[#a3d1ff49]", btnPosition: 'flex-col items-start', transition: '-bottom-10 left-5', position: 'translate-y-5 group-hover:translate-y-0', opacity: 'opacity-20',origin: 'true' },
    { title: "Forex Source", link: "https://forexsource.net/", img: forexImg, textColor: "text-[#fff]", bgColor: "from-[#85020487] to-[#94050f2d]", btnPosition: 'flex-col items-start', transition: '-bottom-10 right-5', position: '-translate-y-5 group-hover:translate-y-0', opacity: 'opacity-50'  },
    { title: "Musafir", link: "https://musafir-pakistan.vercel.app/", img: musafirImg, textColor: "text-[#fff]", bgColor: "from-[#5b9c5780] to-[#5b9c5752]", btnPosition: 'flex-col items-end justify-end', transition: '-top-10 left-5', position: '-translate-y-5 group-hover:translate-y-0', opacity: 'opacity-50' },
    { title: "Beats Headphones", link: "https://beats-headphones-ten.vercel.app/", img: beatsImg, textColor: "text-[#db0104]", bgColor: "from-[#ef4f4190] to-[#ef4f414a]", btnPosition: 'flex-col items-start justify-end', transition: '-top-10 -right-10', position: '-translate-x-5 group-hover:translate-x-0', opacity: 'opacity-30'  },
    // {
    //   title: "A Market Place",
    //   link: "https://secondluv.pk/",
    //   img: algoframeImg,
    //   textColor: "#37c668",
    //   name: "AlgoFrame"
    // },
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
          <div className='mt-10 space-y-10'>
            {projectList.map((project, index) => {
              const number = (index + 1).toString().padStart(2, '0');

              return (
                <div key={index}>
                  <CaseStudyMain
                    textColor={`${project.textColor} ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                    bgColor={project.bgColor}
                    title={project.title}
                    link={project.link}
                    image={project.img}
                    description={project.description}
                    number={number}
                    position={project.position}
                    btnPosition={project.btnPosition}
                    translate={project.transition}
                    opacity={project.opacity}
                    origin={project.origin}
                  />
                </div>
              );
            })}
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
