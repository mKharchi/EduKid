import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'

const Navbar = () => {

    const [shown, setShown] = useState(false)

    return (
        <div className='w-full flex justify-between items-center fixed z-50 bg-background  top-0 p-4 sm:py-5  sm:px-20 '>
            <div className="w-full flex justify-start items-center">
                <div className='lg:w-1/3 flex items-center justify-center'>
                    <img src="/Logo.png" className=' lg:h-16 lg:w-42' width={128} height={128} alt="" />
                </div>
            </div>
            <div className="w-full hidden lg:flex font-semibold justify-center items-center gap-4">
                <a href="#hero" className="text-center">Home</a>
                <a href="#activities" className="text-center">Activities</a>
                <a href="#about" className="text-center">About</a>
                <a href="#programs" className="text-center">Programs</a>
                <a href="#faq" className="text-center">FAQ</a>
                <a href="#teachers" className="text-center">Teachers</a>
                <a href="#contact" className="text-center">Contact</a>
            </div>

            <div className="w-full hidden  lg:flex items-center justify-end">
                <a href='#contact' className='w-1/3 border rounded-full p-4 text-center text-xl text-black bg-background '>
                    Apply Now
                </a>
            </div>
            <div className='flex lg:hidden w-1/2 items-center justify-end gap-4 px-2 text-xl'>
                <CiMenuBurger fill='#232323' onClick={() => setShown(prev => !prev)} />
            </div>

          {shown && (
  <div className='flex absolute top-14 bg-foreground z-50 backdrop-blur-lg rounded-lg px-4 py-2 right-6 flex-col items-end text-lg gap-3 text-black justify-end w-1/2'>
    <a href="#hero" className="w-full text-center">Home</a>
    <a href="#activities" className="w-full text-center">Activities</a>
    <a href="#about" className="w-full text-center">About</a>
    <a href="#programs" className="w-full text-center">Programs</a>
    <a href="#faq" className="w-full text-center">FAQ</a>
    <a href="#teachers" className="w-full text-center">Teachers</a>
    <a href="#contact" className="w-full text-center">Contact</a>
    <a href='#contact' className='w-full border rounded-xl p-4 text-center text-xl text-black bg-background '>
      Apply Now
    </a>
  </div>
)}



        </div>
    )
}

export default Navbar
