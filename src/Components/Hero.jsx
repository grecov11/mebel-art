import React from 'react';
import { heroCover } from "../assets";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Hero = () => {
    // const pVariants = {
    //     hidden: {
    //         x: -10,
    //         opacity: 0,
    //     },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //     },
    // };

    return (
        <section className="flex space-x-2 w-full lg:h-screen " >
          <div className="w-full h-full relative block overflow-hidden"  >
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
            <motion.img
                className=" w-full h-full block object-cover"
                src={ heroCover }
                alt=""
                initial={{rotate: -0.5}}
                animate={{rotate: 1}}
                transition={{
                    delay: 2,
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: 'reverse',
                }}
            />

            <div className="absolute bottom-20 left-20 z-20 inline-block flex flex-col ">
                <h2 className="text-gray-100 inline-block  text-4xl font-semibold">
                    Кухни по индивидуальным <br /> размерам
                </h2>
                <Link
                    to="/kuhni"
                    className="hero-link"
                >
                    Смотреть подробнее
                </Link>
            </div>
          </div>
        </section>
    );
};

export default Hero;