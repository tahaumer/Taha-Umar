import { motion, useIsPresent, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'
import Button from '../component/Button'
import Footer from '../component/Footer'
import { useCursor } from '../context/CursorContext'
import projectList from '../data/projects'
import DesignSystem from '../component/DesignSystem'
import zoaImg from '../assets/images/zoa.jpg'

const CaseStudy = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const { setCursorVariant, setCursorText } = useCursor()
    const isPresent = useIsPresent()
    const { name } = useParams()
    const project = projectList.find(p => p.link === name)
    const currentIndex = projectList.findIndex(p => p.link === name)
    const nextProject = projectList[(currentIndex + 1) % projectList.length]

    if (!project) return <div className="text-white p-10">Project not found.</div>

    const containerRef = useRef(null)
    const gridImgRef = useRef(null)
    const nextCaseRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
    const { scrollYProgress: gridScrollY } = useScroll({ target: gridImgRef, offset: ["start end", "end start"] })
    const { scrollYProgress: nextCaseXY } = useScroll({ target: nextCaseRef, offset: ["start end", "end start"] })

    const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const sectionParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
    const nextCaseParallax = useTransform(nextCaseXY, [0, 1], ["0%", "15%"])
    const gridImageUp = useTransform(gridScrollY, [0, 1], ["0%", "-15%"])
    const gridImageDown = useTransform(gridScrollY, [0, 1], ["0%", "15%"])

    const fadeInFromLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${project.bgColor || 'bg-neutral1'}`}>
            <div className='fixed left-0 h-screen pt-20 z-40'>
                <motion.div
                    initial="hidden" whileInView="visible" variants={fadeInFromLeft} transition={{ duration: 1 }}
                    className="flex w-[61px] -ml-4 sm:ml-0 lg:w-auto flex-col justify-between h-[500px] text-black font-roman py-5 font-semibold"
                >
                    <Link to="/" className="w-fit -rotate-90 pt-8">Home</Link>
                    <span className="w-[200px] -ml-16 h-[0.5px] bg-black block -rotate-90"></span>
                    <p className="w-fit -rotate-90 -ml-5 whitespace-nowrap">© TAHA | 2025</p>
                </motion.div>
            </div>

            <div className='relative z-50'>
                <Footer color='black' />
            </div>

            {/* Hero Section */}
            <motion.section style={{ y: textParallax }} className={`${project.bgColor || 'bg-neutral1'} z-5 z-[1] relative container header pt-[25svh] md:pt-[35svh] pb-12 sm:pb-14`}>
                <div className="grid-cols-12">
                    <div className="col-span-full ml-16 sm:col-span-8">
                        <p className="mb-2 client">{project.subTitle}</p>
                        <h1 className="text-3xl md:text-4xl font-roman mb-0">{project.title}</h1>
                    </div>
                </div>
            </motion.section>

            {/* Parallax Image */}
            <div className='relative h-[50svh] sm:h-[100svh] overflow-hidden z-0'>
                <motion.img
                    style={{ y: imageParallax }}
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                    src={project.img}
                    alt={project.title}
                />
            </div>

            {/* Details Section */}
            <motion.section style={{ y: sectionParallax }} className={`z-5 ${project.bgColor || 'bg-neutral1'} z-[1] relative -mt-40`}>
                <div className="grid grid-cols-8 pb-[10svh] md:py-[15svh] max-w-[1000px] mx-auto pt-10">
                    <div className='grid grid-cols-2 col-span-4 gap-3'>
                        <div className='text-2xl'>
                            <h3 className='font-semibold font-firaCode'>Services ——</h3>
                            <ul className='opacity-50 tracking-tighter text-xl'>
                                {project.services?.map((service, i) => <li key={i}>- {service}</li>)}
                            </ul>
                        </div>
                        <div className='text-2xl'>
                            <h3 className='font-semibold font-firaCode'>Industries ——</h3>
                            <ul className='opacity-50 tracking-tighter text-xl'>
                                {project.industries?.map((industry, i) => <li key={i}>- {industry}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div className='col-span-3 text-xl font-openSans'>
                        <p>{project.description}</p>
                        {project.website && (
                            <div className='w-fit mt-5'>
                                <Button text='Live Website' redirectUrl={project.website} />
                            </div>
                        )}
                    </div>
                </div>
            </motion.section>

            {/* Grid Images */}
            <div ref={gridImgRef} className='relative p-20 grid grid-cols-8 gap-5 z-[2] h-[80svh]'>
                <motion.div style={{ y: gridImageUp }} className='col-span-5 rounded-2xl overflow-hidden w-full h-full'>
                    <img src={project.img2} alt={project.title} className='w-full h-full object-cover object-center' />
                </motion.div>
                <motion.div style={{ y: gridImageDown }} className='col-span-3 rounded-2xl overflow-hidden w-full h-1/2'>
                    <img src={project.img3} alt="" className='w-full h-full object-cover object-center' />
                </motion.div>
            </div>
            <DesignSystem
                fonts={project.fonts || []}
                colors={project.colors || []}
            // spacing={[8, 16, 24, 32]}
            />

            <div className='font-openSans text-2xl max-w-[500px] mx-auto border-l-2 border-black pl-4 text-pretty mb-20'>
                <p>"{project.descriptionShort}"</p>
            </div>

            {/* Next Case */}
            <Link to={nextProject.subTitle ? `/case-study/${nextProject.link}` : `/case-study/${nextProject.link}/comming-soon`} ref={nextCaseRef} className='max-w-[1300px] cursor-none h-[400px] group flex items-center relative mx-auto border-t border-black mt-10'
                onMouseEnter={() => {
                    setCursorText("View")
                    setCursorVariant("project")
                }}
                onMouseLeave={() => {
                    setCursorText("")
                    setCursorVariant("default")
                }}
            >
                <p className='font-semibold font-firaCode absolute top-0 left-0 text-xl'>Next Case Study</p>
                <h3 className='text-7xl font-roman font-semibold'>{nextProject.title.split(' - ')[0]}</h3>
                <motion.div className='w-[400px] h-[280px] absolute top-[-30px] right-7' style={{ x: nextCaseParallax, y: nextCaseParallax }}>
                    <img src={nextProject.img} alt='Next Project Preview' />
                </motion.div>
            </Link>

            {/* Page Exit Animation */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </div>
    )
}

export default CaseStudy
