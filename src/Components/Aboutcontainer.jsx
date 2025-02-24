import React from 'react';
import { motion } from "framer-motion";
import { aboutcont1, aboutcont2 } from "../assets";
import {Link} from "react-router-dom";


const featureAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}



const Aboutcontainer = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="container max-w-screen-2xl mx-auto space-x-2 w-full h-full mt-20">



            <div className="mx-20 grid grid-cols-1">
                <motion.h2
                    custom={1}
                    variants={textAnimation}
                    className="text-gray-100 inline-block text-center text-2xl font-semibold">
                    Мечтаете о доме, где каждый уголок наполнен стилем и комфортом? Мы поможем
                    Вам создать уютную спальную, практичную кухню, элегантную гостиную и стильную прихожую.
                    Доверьтесь нам, и мы превратим Ваши мечты в реальность.
                </motion.h2>
            </div>
            <div
                className=" lg:flex lg:flex-row lg:justify-between lg:grid lg:grid-cols-2 lg:gap-4 mt-4">
                {/*desktop*/}
                <div className="sm:hidden md:hidden lg:block relative  overflow-hidden w-full h-full">
                    <div className="inline-block w-full h-full absolute left-[10px] bottom-[-140px] z-10  ">
                        <motion.img
                            custom={3}
                            variants={featureAnimation}
                            className="max-w-80 h-auto object-cover" src={ aboutcont1 } alt="" />
                    </div>
                    <div className="inline-block w-full h-full absolute right-[-180px] top-[1px] z-0  ">
                        <motion.img
                            custom={2}
                            variants={featureAnimation}
                            className="max-w-80 h-auto object-cover " src={ aboutcont2 } alt=""/>
                    </div>
                </div>
                {/*desktop*/}
                {/*mobile*/}
                <div className="md:block lg:hidden   gap-1 overflow-hidden w-full ">
                    <div className=" w-full flex flex-row items-center justify-between gap-3">
                        <motion.img
                            custom={2}
                            variants={textAnimation}
                            className="w-1/2 w-auto h-auto object-cover" src={ aboutcont1 } alt="" />
                        <motion.img
                            custom={2}
                            variants={textAnimation}
                            className="w-1/2 w-auto h-auto object-cover " src={ aboutcont2 } alt=""/>
                    </div>
                    {/*<div className=" w-1/2">*/}
                    {/*    <img className="w-auto max-w-60 h-auto object-cover " src={ aboutcont2 } alt=""/>*/}
                    {/*</div>*/}
                </div>
                {/*mobile*/}
                <div className="md:mt-4 flex inline-block flex-col">
                    <div>
                        <motion.p
                            custom={4}
                            variants={textAnimation}
                            className="text-gray-100 inline-block text-center text-lg ">
                            Наше производство ориентировано на изготовление мебели по индивидуальным размерам
                            персонально для Вас! В производстве используются материалы, комплектующие,
                            механизмы только проверенных временем производителей!
                            Качественная обработка, опыт наших технологов и огромный ассортимент позволяют
                            производить нестандартные и уникальные изделия,
                            которые наилучшим образом впишутся в дизайн и архитектуру Вашего помещения.
                            Наша команда стремится к совершенству, поэтому мы инвестируем в современное
                            оборудование и новейшие технологии

                        </motion.p>
                    </div>
                    <motion.div
                        custom={5}
                        variants={textAnimation}
                        className="flex flex-row text-gray-100 mt-5 ">
                        <div className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">
                            <p className="text-4xl">
                                3 - 10 лет
                            </p>
                            <p className="text-sm text-slate-400">Гарантии на фурнитуру и материалы</p>
                        </div>
                        <div
                            className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">
                            <p className="text-4xl">
                                8 000 +
                            </p>
                            <p className="text-sm text-slate-400">Безграничные возможности. Больше 8000 вариантов исполнения</p>
                        </div>
                        <div
                            className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">
                            <p className="text-4xl">
                                100%
                            </p>
                            <p className="text-sm text-slate-400">Проверенные поставщики. Только оригинальная фурнитура и материалы</p>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={6}
                        variants={textAnimation}
                        className="flex flex-row text-gray-100 mt-5 ">
                        <div className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">
                            <p className="text-4xl">8 - 20 лет</p>
                            <p className="text-sm text-slate-400">Наши сотрудники имеют стаж в мебельной индустрии</p>
                        </div>
                        <div className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">
                            <p className="text-4xl">100%</p>
                            <p className="text-sm text-slate-400">Выдерживаем сроки, озвученные при заключении</p>
                        </div>
                        {/*<div className="font-semibold rounded-lg h-full mr-2 p-2 bg-neutral-800">*/}
                        {/*    <p className="text-4xl">20+</p>*/}
                        {/*    <p className="text-sm text-slate-400">Лет на рынке производства мебели</p>*/}
                        {/*</div>*/}
                    </motion.div>

                    <div className="inline-block text-center mt-5">
                        <Link
                            to="/about"
                            className="hero-link"
                        >
                            Подробнее о компании
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Aboutcontainer;