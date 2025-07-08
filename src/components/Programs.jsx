import React from 'react'


const Programcard = ({ title
    , text
    , image
    , age
    , days
    , duration
    , color }) => {
    return (
        <div
            className="relative w-full group h-full  md:max-w-[50vw] xl:max-w-[30vw] bg-white rounded-2xl p-8 flex flex-col items-center justify-between gap-6 overflow-hidden"
        >
            {/* Background image layer */}
            <div className="relative  w-full flex items-center overflow-hidden rounded-xl justify-center">
                <img src={`/${image}`} className='object-cover w-full h-64' alt="" />
            </div>
            <h1 className='relative z-10 text-3xl text-left w-full font-bold'>{title}</h1>
            <p className='relative z-10 text-lg text-left w-full'>{text}</p>
            <div className={`w-full rounded-xl bg-${color} text-white flex items-center justify-center`}>
                {
                    [
                        {
                            number: age,
                            text: "age"

                        },
                        {
                            number: days,
                            text: "weekly"

                        },
                        {
                            number: duration,
                            text: "period"

                        },

                    ].map((el, index) => (<div key={index} className='w-full  flex p-4 py-5 flex-col justify-center items-center '>
                        <span className='text-xl font-bold'>{el.number}</span>
                        <span className='text-lg font-light text-center w-full '>{el.text}</span>
                    </div>))
                }
            </div>
        </div>
    )
}


const Programs = () => {

    const programs = [
        {
            title: "Settling",
            text: 'To round out our weekend of celebrations, we are holding our reunion.',
            image: "settling.png",
            age: "4-5 yrs",
            days: "3 days",
            duration: "3.30 hrs",
            color: "primary"
        }, {
            title: "Play Group",
            text: 'We will be magically transforming the School’s Sports Center into a full game area.',
            image: "playgroup.png",
            age: "4-5 yrs",
            days: "3 days",
            duration: "3.30 hrs",
            color: "secondary"
        }, {
            title: "Pre-Nursery",
            text: 'EduKid is thrilled to teach pre-nursery courses to better the lives of our children.',
            image: "prenursery.png",
            age: "4-5 yrs",
            days: "3 days",
            duration: "3.30 hrs",
            color: "tertiary"
        },
    ]

    return (
        <div className='w-full min-h-[60vh] flex flex-col justify-start items-center p-4 py-5 bg-background gap-5 sm:px-20'>
            <h1 className='w-full text-center font-bold text-3xl '>Our Programs</h1>
            <p className='text-xl w-full text-center font-medium max-w-xl'>EduKid opened its doors in 1998 with a unique vision to provide students with a globally focused study of arts</p>
            <div className='w-full sm:px-20 mt-4 grid grid-cols-1 gap-14 xl:grid-cols-2 2xl:grid-cols-3 place-items-center '>
                {programs.map((item, index) => <Programcard key={index} {...item} />)}
            </div>
        </div>
    )
}

export default Programs
