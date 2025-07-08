import React, { useState } from 'react'


const Programcard = ({ title, bgImage, text, image }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="relative w-full group h-full sm:max-w-[60vw] hover:text-white border border-dotted border-secondary rounded-2xl p-8 flex flex-col items-center justify-center gap-6 overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background image layer */}
            <div
                className={`absolute inset-0 bg-center bg-cover transition-opacity duration-400 ease-in-out z-0 rounded-2xl`}
                style={{
                    backgroundImage: `url('/${bgImage}')`,
                    opacity: hovered ? 1 : 0,
                    color: hovered ? "#fff" : "#000"
                }}
            />
            <div className="relative z-10 w-full flex items-center justify-center">
                <img src={`/${image}`} className='object-fill' alt="" />
            </div>
            <h1 className='relative z-10 text-3xl text-center w-full font-bold'>{title}</h1>
            <p className='relative z-10 text-lg text-center w-3/4'>{text}</p>
            <button className='relative z-10 p-4 text-center rounded-full text-md border border-secondary hover:border-white hover:bg-white hover:text-black  transition-all duration-200'>View Details</button>
        </div>
    )
}


const Activities = () => {
    const programs = [
        {
            bgImage: "bgSports.png",
            title: "Music Class",
            text: 'Musical indoor and outdoor activities that cater to all domains development!',
            image: "music.png"
        }, {
            bgImage: "bgSports.png",
            title: "Drawing Class",
            text: 'Fun Arts and Crafts projects for the children to work on together!',
            image: "draw.png"
        }, {
            bgImage: "bgSports.png",
            title: "Sport Class",
            text: 'Each day at EduKid is a celebration. We celebrate all sports!',
            image: "sport.png"
        },
    ]



    return (
        <div className='w-full min-h-[60vh] flex flex-col justify-start items-center p-4 py-5 bg-white gap-5 sm:px-20'>
            <h1 className='w-full text-center font-bold text-3xl '>Our Acitivities</h1>
            <p className='text-xl w-full text-center font-medium max-w-xl'> Our multi-level kindergarten cater to the age groups 2-5 years with a curriculum focussing children.</p>
            <div className='w-full mt-4 grid grid-cols-1 gap-14 lg:grid-cols-2 xl:grid-cols-3 place-items-center '>
                {programs.map((item, index) => <Programcard key={index} {...item} />)}
            </div>
        </div>
    )
}

export default Activities
