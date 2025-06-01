import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';
import download from '../assets/icons/download.svg';

const Button = ({ text, icon, redirectUrl, downloadUrl, invert = false, className = "bg-secondary text-primary border-white/20 rounded-full" }) => {
    const buttonContent = (
        <div className='group/button flex items-center w-full'>
            <button className={`relative xl:w-[300px] lg:w-[200px] sm:w-[300px] w-full md:h-[50px] inline-flex items-center justify-center overflow-hidden backdrop-blur-lg px-6 py-2 text-base font-semibold ${className} transition-all duration-300 ease-in-out border`}>
                <span className="md:text-lg">{text}</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[1300ms] group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-black/20"></div>
                </div>
            </button>
            <button className={`ml-3 ${className} min-w-[50px] md:h-[50px] h-[41px] flex justify-center items-center z-10`}>
                <img src={icon ? download : arrow} alt={icon ? "Download" : "Arrow"} className={`group-hover/button:-rotate-45 transition-all duration-300 ${invert ? 'invert' : ''}`} />
            </button>
        </div>
    );

    return (
        <div className='flex justify-end w-full'>
            {downloadUrl ? (
                <a href={downloadUrl} download className='flex w-full'>{buttonContent}</a>
            ) : redirectUrl ? (
                <Link to={redirectUrl} className='flex w-full'>{buttonContent}</Link>
            ) : (
                buttonContent
            )}
        </div>
    );
};

const CaseStudyMain = ({ textColor, bgColor, title, link, image, description, number, translate = '', position = '', btnPosition = 'items-end flex-col', opacity = 'bg-opacity-50', origin = false, ava = true }) => {
    return (
        <div className={`relative w-full md:w-[80%] shadow-xl md:h-[450px] h-[250px] ${textColor} md:p-16 p-6 flex justify-start bg-cover bg-center flex-col group`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`absolute inset-0 bg-black ${opacity}`}></div>
            {origin ? (
                <span className={`block w-0 md:group-hover:w-full origin-left transition-all duration-500 ease-in-out h-full ${bgColor} bg-gradient-to-r absolute right-0 top-0 bottom-0`}></span>
            ) : (
                <span className={`block w-0 md:group-hover:w-full origin-right transition-all duration-500 ease-in-out h-full ${bgColor} bg-gradient-to-r absolute left-0 top-0 bottom-0`}></span>
            )}
            <div className={`w-[350px] h-[230px] absolute opacity-0 group-hover:opacity-100 delay-500 overflow-hidden ${translate} ${position} transition-all duration-500 ease-in-out`}>
                <p className="relative md:block hidden text-[300px] font-bold leading-none league-spartan">{number}</p>
            </div>
            <div className={`group-hover:scale-105 transition-all duration-500 ease-in-out w-full h-full flex ${btnPosition}`}>
                <h2 className="md:text-4xl text-2xl font-bold z-10">{title}</h2>
                <p className="italic mt-2">{description}</p>
                <div className='w-fit mt-3'>
                    <Button text="View Case Study" redirectUrl={ava ? `/case-study/${link}` : `/case-study/${link}/comming-soon`} invert={false} className='bg-secondary text-primary rounded-sm' />
                </div>
            </div>
        </div>
    );
};

export default CaseStudyMain;
