import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import dowmload from '../assets/icons/download.svg'

const Button = ({ text, icon }) => {
    return (
        <div className='flex'>
            <button className="group/button relative w-[300px] h-[50px] inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary backdrop-blur-lg px-6 py-2 text-base font-semibold text-primary transition-all duration-300 ease-in-out border border-white/20" >
                <span className="text-lg">{text}</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[1300ms] group-hover/button:[transform:skew(-13deg)_translateX(100%)]" >
                    <div className="relative h-full w-10 bg-black/20"></div>
                </div>
            </button>
            <button className='ml-3 bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                <img src={icon ? dowmload : arrow} alt="go" />
            </button>
        </div>
    )
}

export default Button