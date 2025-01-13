import React, { forwardRef } from 'react';
import {motion} from "framer-motion";


export const ToTopBtn = forwardRef(({onClick}, ref) => {
    return (
        <>
             {/*go to top button*/}
            <button
                ref={ref}
                onClick={onClick}
                className="fixed right-5 top-[90%] z-50  p-2  bg-[#193229] rounded-xl hover:scale-110 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white text-lg ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </>
    );
});

export const MToTopBtn = motion.create(ToTopBtn);