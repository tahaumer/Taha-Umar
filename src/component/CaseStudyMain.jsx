import React from 'react'
import Button from './Button'

const CaseStudyMain = ({ textColor, bgColor, title, link , image , description, number }) => {
    return (
        <div className={`w-[80%] shadow-xl h-[450px] ${textColor} p-16 flex justify-start bg-cover bg-center flex-col group relative hover:bg-opacity-55`} style={{ backgroundImage: `url(${image})` }} >
            <span className={`block w-0 group-hover:w-full transition-all duration-500 ease-in-out h-full ${bgColor} bg-gradient-to-r absolute left-0 top-0 bottom-0`}></span>
            <div className="w-[350px] h-[230px] absolute -top-10 opacity-0 group-hover:opacity-100 right-5 delay-300 overflow-hidden translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="relative text-[300px] font-bold leading-none league-spartan">
                    {number}
                </p>
            </div>
            <div className='group-hover:scale-105 transition-all duration-500 ease-in-out w-full flex flex-col items-start'>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="italic mt-2">{description}</p>
                <div className='w-fit mt-3'>
                    <Button text="View Case Study" redirectUrl={link} invert={false} className='bg-secondary text-primary rounded-sm' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyMain