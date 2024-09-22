import { motion, useIsPresent } from 'framer-motion'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { TypeAnimation } from 'react-type-animation';
import Button from '../componenta/Button';
import myImage from '../assets/images/taha.png'

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
  }
};
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
        <div className='flex p-20 space-x-10'>
          <div className='w-[60%] z-10 relative'>
            <motion.h1 viewport={{ once: true }} initial={{ opacity: 1, y: 200 }} animate={{ opacity: 1 , y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} className='text-[170px] text-white font-roman leading-[0.8] mb-10'>About
              <motion.span viewport={{ once: true }} initial={{width:0 }} animate={{ width: 400 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }} className='h-[0.5px] bg-white block mb-2'></motion.span>
              <motion.span viewport={{ once: true }} initial={{width:0 }} animate={{ width: 300 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }} className='h-[0.5px] bg-white block'></motion.span>
            </motion.h1>
            <div className='bg-primary relative z-10'>
              <div className="text-white text-[50px] font-roman leading-none">
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
              </div>
              <p className='my-8 text-white font-openSans font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet alias dolorum explicabo quia, aperiam quaerat nam odit voluptatum ipsa molestiae iste accusantium quos cum distinctio? Sunt ipsam exercitationem in?</p>
              <p className='my-8 text-white font-openSans font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro, consectetur maxime, deleniti eum, impedit repellendus quam omnis placeat perspiciatis fugit animi? Dolores porro accusamus eaque nihil ex ipsa aliquam!</p>
              <p className='my-8 text-white font-openSans font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptatibus nam veritatis laborum repellat modi, inventore omnis dolor sapiente, minima quae dolorem exercitationem dolores dolore, non vero itaque doloremque tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione, pariatur voluptate, temporibus vitae at similique sint, aut eligendi totam consequuntur soluta itaque expedita a doloribus rerum ullam illum atque.</p>
              <p className='my-8 text-white font-openSans font-thin'>This is one of my favourite quotes (by Peter Drucker):</p>
              <h3 className='text-white text-[50px] border-l pl-5 font-roman'>“There is nothing so useless as doing efficiently that which should not be done at all.”</h3>
              <p className='my-12 text-white font-roman text-3xl font-thin'>Experience</p>
              <p className='my-8 text-white font-openSans font-thin'>- Degree in Brand Communications <br />
                - 15 years experience in Digital Design, Web Development, Advertising and Product Development
              </p>
              <p className='my-12 text-white font-roman text-3xl font-thin'>Skills</p>
              <p className='my-8 text-white font-openSans font-thin'>
                UI/UX Design / Strategy / Product Management / User Research / Agile Methodologies / Collaboration / Design Sprints / Design Systems / HTML and CSS / CMS Design & Architecture / Webflow Development / Framer Development / Photography / Graphic Design
              </p>
              <Button text="My CV" icon />
            </div>
          </div>
          <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={fadeInFromRight} className='w-[384px] h-fit shadow-custom'>
            <img src={myImage} alt="" className='object-contain object-center' />
          </motion.div>
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
  )
}

export default About