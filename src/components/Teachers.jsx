import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const TeachrCard = ({ image, media, name }) => {
    return (
        <div className="keen-slider__slide  flex justify-center">
            <div className={`h-95  w-80  bg-cover bg-center rounded-2xl group flex flex-col items-center justify-end overflow-hidden`}
                style={{ backgroundImage: `url(/${image})` }}>
                <div className="p-4 w-full flex flex-col justify-center items-center gap-4 rounded-t-2xl bg-background text-black">
                    <h1 className="text-xl text-center font-bold">{name}</h1>
                </div>
                <div className="h-0 w-full group-hover:h-16 flex items-center justify-center bg-secondary text-white transition-all duration-300 overflow-hidden">
                    {media.map((el, index) => (
                        <span key={index} className="p-1">{el}</span>
                    ))}
                </div>
            </div>
        </div>

    )
}

const Teachers = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const teachers = [
        { name: 'Edith Nekesa', image: 'teacher1.png', media: [<FaFacebook />, <FaTwitter />, <FaYoutube />] },
        { name: 'Steven Strange', image: 'teacher2.png', media: [<FaFacebook />, <FaTwitter />, <FaYoutube />] },
        { name: 'Diana Prince', image: 'teacher3.png', media: [<FaFacebook />, <FaTwitter />, <FaYoutube />] },
        { name: 'Peter Parker', image: 'teacher4.png', media: [<FaFacebook />, <FaTwitter />, <FaYoutube />] },
    ]

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        breakpoints: {
            "(min-width: 1200px)": {
                slides: { perView: 4, spacing: 4 },
            },
            "(max-width: 1200px)": {
                slides: { perView: 3, spacing: 4 },
            },
            "(max-width: 800px)": {
                slides: { perView: 2, spacing: 16 },
            }, "(max-width: 680px)": {
                slides: { perView: 1, spacing: 16 },
            },
        },
        slides: { perView: 1, spacing: 12 },
    })

    return (
        <div className="w-full flex flex-col justify-center items-center px-4 py-10 bg-white gap-6 sm:px-10">
            <h1 className="w-full text-center font-bold text-3xl">Our Best Teachers</h1>
            <p className="text-xl w-full text-center font-medium max-w-5xl">
                Meet the educators who bring passion, dedication, and real-world experience to the classroom.
            </p>

            <div className="relative h-full w-full">
                {/* Keen slider container */}
                <div ref={sliderRef} className="keen-slider py-4">
                    {teachers.map((teacher, index) => (
                        <TeachrCard key={index} {...teacher} />
                    ))}
                </div>

                {/* Navigation buttons */}
                {loaded && (
                    <>
                        <button
                            onClick={() => instanceRef.current?.prev()}
                            className="flex 2xl:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => instanceRef.current?.next()}
                            className="flex 2xl:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Teachers
