import React from 'react'
import Button from './Button'
import img from '../assets/images/tool.png'

const CaseStudyMain = () => {
    return (
        <div className="w-[80%] mx-auto shadow-xl h-[450px] text-white p-16 flex justify-start bg-cover bg-center flex-col group relative hover:bg-opacity-55" style={{ backgroundImage: `url(${img})` }} >
            <span className='block w-0 group-hover:w-full transition-all duration-500 ease-in-out h-full bg-gradient-to-r from-[#9c3607a8] to-[#9c360771] absolute left-0 top-0 bottom-0'></span>
            <div className="w-[270px] h-[230px] absolute -top-10 opacity-0 group-hover:opacity-100 right-5 overflow-hidden translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="relative text-[300px] font-bold leading-none league-spartan before:h-[300px] before:bg-black/20 before:absolute before:top-0 before:left-0 before:w-[300px] before:delay-500 group-hover:before:h-0 before:z-10 before:transition-all before:duration-500 before:ease-in-out transition-transform duration-500 ease-in-out">
                    01
                </p>
            </div>
            <div className='group-hover:scale-105 transition-all duration-500 ease-in-out w-full flex flex-col items-start'>
                <h1 className="text-4xl font-bold">Tool Matrix</h1>
                <p className="italic mt-2">Let's Improve Your Calculation Skills with Us !</p>
                <div className='w-fit mt-3'>
                    <Button text="View Case Study" redirectUrl='' invert={false} className='bg-secondary text-primary rounded-sm' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyMain