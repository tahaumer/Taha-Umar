import React from 'react'
import Button from './Button'

const CaseStudyMain = ({ textColor, bgColor, title, link, image, description, number, translate, position, btnPosition, opacity, origin=false }) => {
    return (
        <div className={`relative w-full  md:w-[80%] shadow-xl h-[450px] ${textColor} p-16 flex justify-start bg-cover bg-center flex-col group`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`absolute inset-0 bg-black ${opacity}`}></div>
            {origin ? (
                <span className={`block w-0 md:group-hover:w-full origin-left transition-all duration-500 ease-in-out h-full ${bgColor} bg-gradient-to-r absolute right-0 top-0 bottom-0`}></span>
            ) : (
                <span className={`block w-0 md:group-hover:w-full origin-right transition-all duration-500 ease-in-out h-full ${bgColor} bg-gradient-to-r absolute left-0 top-0 bottom-0`}></span>
            )}
            <div className={`w-[350px] h-[230px] absolute opacity-0 group-hover:opacity-100 delay-500
                 overflow-hidden ${translate} ${position} transition-all duration-500 ease-in-out`}>
                <p className="relative md:block hidden text-[300px] font-bold leading-none league-spartan">
                    {number}
                </p>
            </div>
            <div className={`group-hover:scale-105 transition-all duration-500 ease-in-out w-full h-full flex ${btnPosition}`}>
                <h2 className="text-4xl font-bold z-10">{title}</h2>
                <p className="italic mt-2">{description}</p>
                <div className='w-fit mt-3'>
                    <Button text="View Case Study" redirectUrl={'/project/new'} invert={false} className='bg-secondary text-primary rounded-sm' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyMain