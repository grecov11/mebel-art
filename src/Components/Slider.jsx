import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { images, descritption } from "../assets/slider";



const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

      }

    return (
        <section className="max-w-[1900px] h-[960px] mx-auto w-full relative group">
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
            <div style={{backgroundImage: `url(${images[currentIndex]})`}}
                 className="w-full h-full bg-center gb-contain bg-no-repeat duration-500 ">
            </div>

            <div className="absolute bottom-40 left-20 z-20 inline-block flex flex-col ">
                    <h2 className="text-gray-100 inline-block  text-4xl font-semibold duration-500">
                        {descritption[currentIndex].title}
                    </h2>
                    <Link
                        to={descritption[currentIndex].link}
                        className="hero-link "
                    >
                        Смотреть подробнее
                    </Link>
              </div>

            {/*left Arrow*/}
            <span onClick={prevSlide} className="w-[30px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5}
                 stroke="currentColor"
                 className="hidden group-hover:block h-6 w-6 font-semibold text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 z-30 text-2xl rounded-full bg-black/20 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                </svg>
            </span>


            {/*right Arrow*/}
            <span onClick={nextSlide} className="w-[30px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5}
                     stroke="currentColor"
                     className="hidden group-hover:block h-6 w-6 font-semibold text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 z-30 text-2xl rounded-full bg-black/20 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
            </span>


        </section>
    );
};

export default Slider;