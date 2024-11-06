import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo2Dark.svg'
const Navbar = () => {
  return (
    <div className='container p-5 bg-transparent flex justify-between items-center '>
      <img src={logo} alt='Taha' className='w-16 ' />
      <div className='font-firaCode font-bold text-lg'>
        <button className='block text-secondary'>EN</button>
{/*         <button className='block text-neutral1'>DE</button> */}
      </div>
    </div>

  )
}

export default Navbar
