import React from 'react';
import { motion, useIsPresent } from 'framer-motion';
import { Construction, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';
import projectList from '../data/projects'
import Footer from '../component/Footer';

const UnderConstruction = ({ expectedDate = 'Coming Soon' }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };
    const isPresent = useIsPresent()
    const { setCursorVariant, setCursorText } = useCursor()

    const { name } = useParams()
    const project = projectList.find(p => p.link === name)

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const fadeInFromLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    }


    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="min-h-screen bg-neutral1 flex flex-col items-center md:px-4"
            >
                <Footer color='black' />
                <div className='fixed left-0 h-screen md:block hidden pt-20 z-40'>
                    <motion.div
                        initial="hidden" whileInView="visible" variants={fadeInFromLeft} transition={{ duration: 1 }}
                        className="flex w-[61px] -ml-4 sm:ml-0 lg:w-auto flex-col justify-between h-[500px] text-black font-roman py-5 font-semibold"
                    >
                        <Link to="/" className="w-fit -rotate-90 pt-8">Home</Link>
                        <span className="w-[200px] -ml-16 h-[0.5px] bg-black block -rotate-90"></span>
                        <p className="w-fit -rotate-90 -ml-5 whitespace-nowrap">© TAHA | 2025</p>
                    </motion.div>
                </div>
                <div className="max-w-2xl w-full my-auto px-3">
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <Construction className="w-16 h-16 mx-auto mb-6 text-accent" />
                        <h1 className="text-3xl md:text-5xl font-roman mb-4">{project.title}</h1>
                        <p className="md:text-xl font-openSans text-gray-600">This case study is currently under construction.</p>
                        <p className="text-lg font-firaCode mt-2 text-accent">{expectedDate}</p>
                    </motion.div>

                    {project.website && (
                        <motion.div variants={itemVariants} className="flex justify-center">
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300"
                            >
                                <span className="font-firaCode">Preview Website</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    )}

                    <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="font-firaCode text-lg mb-2">Design</h3>
                                <div className="h-1 w-24 mx-auto bg-neutral2 rounded" />
                                <p className="mt-2 text-gray-600">Completed</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-firaCode text-lg mb-2">Development</h3>
                                <div className="h-1 w-24 mx-auto bg-neutral2 rounded" />
                                <p className="mt-2 text-gray-600">Completed</p>
                            </div>
                            <div className="text-center col-span-2 md:col-span-1">
                                <h3 className="font-firaCode text-lg mb-2">Launch</h3>
                                <div className="h-1 w-24 mx-auto bg-neutral2 rounded" />
                                <p className="mt-2 text-gray-600">In Progress</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* Page Exit Animation */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />

        </>
    );
};

export default UnderConstruction;
