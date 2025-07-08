import React from 'react'
import { arrowIcon } from '../assets/assets.jsx'

const About = () => {
    return (
        <div className='w-full my-4 h-[60vh] flex flex-col md:flex-row justify-start items-center p-4 py-5 bg-white gap-5 sm:px-20'>
            <div className='w-full hidden md:flex justify-center items-center'>
                <img src="/aboutImage.png" className='object-fill w-full h-full' width={512} height={512} alt="" />
            </div>
            <div className='w-full flex flex-col h-full justify-center items-start gap-6'>
                <h1 className='w-full text-left  font-bold text-3xl '>About us</h1>
                <p className='w-full text-lg max-w-xl '>Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.</p>
                <div className='w-[90%] rounded-xl bg-primary text-white flex items-center justify-center
                '>
                    {
                        [
                            {
                                number: "14+",
                                text: "Years of experience"

                            },
                            {
                                number: "14+",
                                text: "Students each year"

                            },
                            {
                                number: "14+",
                                text: "Award winning"

                            },

                        ].map((el, index) => (<div key={index} className='w-full flex p-4 py-5 flex-col justify-center items-center '>
                            <span className='text-xl font-bold'>{el.number}</span>
                            <span className='text-lg font-light text-center w-full '>{el.text}</span>
                        </div>))
                    }
                </div>
                <div className='w-full flex items-center justify-start gap-2'>
                    <span className='rounded-full p-1 bg-tertiary'>{arrowIcon}</span> We believe every child is intelligent so we care.

                </div> <div className='w-full flex items-center justify-start gap-2'>
                    <span className='rounded-full p-1 bg-tertiary'>{arrowIcon}</span> Teachers make a difference of your child.
                </div>
                <div className='w-full  '>
                    <button className='xl:w-1/4 p-4 text-center text-xl text-white bg-secondary rounded-xl xl:rounded-full'>
                        View more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
