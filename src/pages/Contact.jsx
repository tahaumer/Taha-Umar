import { motion, useIsPresent } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import contactImg from '../assets/icons/contact.svg';
import Button from '../component/Button';
import phone from '../assets/icons/mail.svg'
import bgImage from '../assets/images/bgp-white.svg';
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

const Contact = () => {
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

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isFocused, setIsFocused] = useState({
        username: false,
        email: false,
        subject: false,
        message: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleFocus = (field) => {
        setIsFocused(prevState => ({ ...prevState, [field]: true }));
    };

    const handleBlur = (field) => {
        setIsFocused(prevState => ({ ...prevState, [field]: formValues[field].length > 0 }));
    };

    const isFilled = (field) => {
        return formValues[field].length > 0 || isFocused[field];
    };

    return (
        <>
            <div className='container pl-10'>
            <BackgroundShapes2 numberOfParticles='20' />
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
                <div className='flex py-10 xl:p-20 pb-0 space-x-10'>
                    <div className='xl:w-[80%] z-10 relative'>
                        <AnimatedHeader 
                            title="Contact"
                            initialY={200} 
                            spanWidths={[400, 300]} 
                            delay={0.5} 
                        />
                        <div className='bg-primary relative z-10 pr-10'>
                            <div className="text-white">
                                <p className='my-8 text-white font-openSans font-thin'>
                                    I enjoy working with dedicated creatives from businesses that make the world beautiful. Together, we can inspire change and bring innovative ideas to life.
                                    We can accomplish so much together. Let’s talk!
                                </p>
                                <div className="border-dashed relative border-gray-400 border sm:p-10 p-5">
                                    <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full blur-sm brightness-[0.3]'
                                        style={{
                                            backgroundImage: `url(${bgImage})`,
                                            backgroundRepeat: 'repeat',
                                            backgroundSize: 'auto'
                                        }}>

                                    </div>
                                    <div className='w-fit space-y-10'>
                                        <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20'>
                                            <div className='relative md:w-[250px]'>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    className={`border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit`}
                                                    value={formValues.username}
                                                    onChange={handleInputChange}
                                                    onFocus={() => handleFocus('username')}
                                                    onBlur={() => handleBlur('username')}
                                                />
                                                <label
                                                    htmlFor="username"
                                                    className={`absolute left-0 top-1 cursor-text transition-all ${isFilled('username') ? 'text-xs md:-top-5 -top-[13px] text-[#5a6a88]' : 'text-white'}`}>
                                                    Name
                                                </label>
                                            </div>
                                            <div className='relative md:w-[250px]'>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className={`border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit`}
                                                    value={formValues.email}
                                                    onChange={handleInputChange}
                                                    onFocus={() => handleFocus('email')}
                                                    onBlur={() => handleBlur('email')}
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className={`absolute left-0 top-1 cursor-text transition-all ${isFilled('email') ? 'text-xs md:-top-5 -top-[13px] text-[#5a6a88]' : 'text-white'}`}>
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className='relative w-full'>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                className={`border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit`}
                                                value={formValues.subject}
                                                onChange={handleInputChange}
                                                onFocus={() => handleFocus('subject')}
                                                onBlur={() => handleBlur('subject')}
                                            />
                                            <label
                                                htmlFor="subject"
                                                className={`absolute left-0 top-1 cursor-text transition-all ${isFilled('subject') ? 'text-xs md:-top-5 -top-[13px] text-[#5a6a88]' : 'text-white'}`}>
                                                Subject
                                            </label>
                                        </div>
                                        <div className='relative w-full'>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className={`border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit`}
                                                value={formValues.message}
                                                onChange={handleInputChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={() => handleBlur('message')}
                                            ></textarea>
                                            <label
                                                htmlFor="message"
                                                className={`absolute left-0 top-1 cursor-text transition-all ${isFilled('message') ? 'text-xs md:-top-5 -top-[13px] text-[#5a6a88]' : 'text-white'}`}>
                                                Message
                                            </label>
                                        </div>
                                        <Button text="Send Message" />
                                    </div>
                                </div>
                            </div>
                            <p className='text-white text-2xl font-roman pl-3 mt-5 mb-3'>OR</p>
                            <a href='mailto:tahaumer21@gmail.com' className='flex items-center w-fit space-x-3 text-white font-roman md:text-3xl text-xl font-thin'> <img src={phone} alt="" /> <span> tahaumer21@gmail.com</span></a>
                        </div>
                    </div>
                    <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={fadeInFromRight} className='w-[384px] h-[482px] hidden xl:block'>
                        <img src={contactImg} alt="" className='object-contain object-center' />
                    </motion.div>
                </div>
            <Footer/>
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

export default Contact;
