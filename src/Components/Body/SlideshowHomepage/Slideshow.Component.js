import { useState, useRef, useEffect } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

import Slide1 from '../../../Assets/Carousel/Slide1.jpg'
import Slide2 from '../../../Assets/Carousel/Slide2.jpg'
import Slide3 from '../../../Assets/Carousel/Slide3.jpg'

const SlideShowHomepage = () => {
    const Slides = [Slide1, Slide2, Slide3]

    const [TurnOnAutoSlide, setTurnOnslide] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const PrevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        setTurnOnslide(true)
    }

    const NextSlide = () => {
        const isLastSlide = currentIndex === Slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
        setTurnOnslide(true)
        console.log("turnOn", TurnOnAutoSlide);
    }

    const goToSlide = (sildeIndex) => {
        setCurrentIndex(sildeIndex)
    }




    return (
        <>
            <div className="max-w-[100%] py-4 m-auto relative group  grid-rows-3 grid-flow-col gap-2 mt-4">
                <div className=" w-[100%] h-full bg-center bg-cover duration-1000 row-span-3 col-span-10 relative group z-10">
                    <div className="relative mt-3">
                        <img src={Slides[currentIndex]} alt="" />
                    </div>

                    {/* Arrow Left - Right */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft className="text-sm lg:text-3xl" onClick={PrevSlide} />
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight className="text-sm lg:text-3xl" onClick={NextSlide} />
                    </div>
                    {/* Indicator Slides */}
                    <div className="flex justify-center align-bottom absolute bottom-0 left-0 right-0 m-auto">
                        {Slides.map((slide, sildeIndex) => (
                            <div
                                key={sildeIndex}
                                onClick={() => goToSlide(sildeIndex)}
                                className="text-sm cursor-pointer p-1">
                                {currentIndex === sildeIndex ? <i className="fa-regular fa-circle fa-2xs text-Black800"></i> :
                                    <i className="fa-solid fa-circle fa-2xs text-Black800"></i>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideShowHomepage