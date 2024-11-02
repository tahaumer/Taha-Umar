import React from 'react';
import arrow from '../assets/icons/arrow.svg';
import download from '../assets/icons/download.svg';
import { Link } from 'react-router-dom';

const Button = ({ text, icon, redirectUrl, downloadUrl }) => {
    const buttonContent = (
        <>
            <button className="group/button relative xl:w-[300px] lg:w-[200px] sm:w-[300px] w-[200px] h-[50px] inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary backdrop-blur-lg px-6 py-2 text-base font-semibold text-primary transition-all duration-300 ease-in-out border border-white/20">
                <span className="text-lg">{text}</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[1300ms] group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-black/20"></div>
                </div>
            </button>
            <button className='ml-3 bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                <img src={icon ? download : arrow} alt="icon" />
            </button>
        </>
    );

    return (
        <div className='flex justify-end w-full'>
            {downloadUrl ? (
                <a href={downloadUrl} download className='flex'>
                    {buttonContent}
                </a>
            ) : redirectUrl ? (
                <Link to={redirectUrl} className='flex'>
                    {buttonContent}
                </Link>
            ) : (
                buttonContent
            )}
        </div>
    );
}

export default Button;
