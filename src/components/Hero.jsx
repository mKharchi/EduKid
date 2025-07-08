import React from 'react'

const Hero = () => {
    return (
        <div id='' className="min-h-screen p-4 sm:py-5 bg-[url('/heroImagelg.png')] xl:bg-[url('/heroImage.png')]  sm:px-20 bg-no-repeat bg-center bg-cover w-full flex flex-col items-start justify-center gap-4 sm:gap-6"
          
        >
            <div className='xl:w-1/2 text-left text-lg font-semibold opacity-40'>Kindergarten Program</div>
            <div className='xl:w-1/2 text-left text-5xl lg:text-6xl  xl:text-7xl font-extrabold max-w-xl lg:max-w-2xl xl:max-w-3xl'
            >Best Children’s Education Curriculum
            </div>
            <div className='lg:w-1/2 mt-2 text-left text-md '>
                Admission Open 20-24 April
            </div>
            <div className='w-full xl:w-1/2 '>

                <a href='#contact' className='xl:w-1/4 p-4 text-center text-xl text-foreground bg-secondary rounded-xl xl:rounded-full'>
                    Apply Now
                </a>
            </div>
        </div>
    )
}

export default Hero