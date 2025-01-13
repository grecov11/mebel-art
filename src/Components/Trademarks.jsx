import React from 'react';
import {motion} from "framer-motion";
import {
    holiday_logo,
    holiday_bg,
    sonati_bg,
    sonati_logo,
    foodzhi_bg,
    foodzhi_logo,
    hostinn_bg,
    hostinn_logo,
}
from '../assets';
import {MToTopBtn} from "./ToTopBtn.jsx";

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

const Trademarks = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="container max-w-screen-2xl mx-auto space-x-2 w-full h-full my-20">


            <motion.h2
                custom={1}
                variants={textAnimation}
                className="text-gray-100 inline-block text-center text-2xl font-semibold">
                Наша компания объединяет четыре мебельных бренда – <span className="text-emerald-700">SONATTI</span>, <span className="text-emerald-700">FOODZHI</span>,
                <span className="text-emerald-700">HOSTINN</span> и <span className="text-emerald-700">HALLIDAY</span> в большую представительную семью.
                Общие «фамильные» черты: собственное мощное производство, индивидуальный подход к каждому покупателю и отличное качество готовой продукции
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="mt-5  sm:columns-1  md:columns-2 lg:columns-2 xl:flex xl:justify-between py-10">
                <motion.div
                    custom={1}
                    variants={featureAnimation}
                    className="group relative mb-4 xl:top-12">
                    <img
                        className="relative z-0 w-full lg:w-[95%] h-auto object-cover"
                        src={ holiday_bg } alt=""
                    />
                    <div className="sm:block xl:hidden xl:group-hover:block absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70"></div>
                    <img
                        className="absolute top-[10px] left-[10] z-20 object-cover"
                        src={ holiday_logo } width="140" height="48" alt=""
                    />
                    <p className="td-img-p">
                        <span className="text-emerald-700">HALLIDAY</span> – опытный производитель шкафов-купе. В постоянно растущем
                        ассортименте есть не только линейки серийной мебели,
                        но и эксклюзивные модели. Идеально соответствуют индивидуальным пожеланиям и даже капризам заказчика.
                    </p>
                </motion.div>
                <motion.div
                    custom={2}
                    variants={featureAnimation}
                    className="group relative mb-4">
                    <img
                        className="relative z-0 w-full lg:w-[95%] h-auto object-cover"
                        src={ sonati_bg }   alt=""
                    />
                    <div className="sm:block xl:hidden xl:group-hover:block absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70"></div>
                    <img
                        className="absolute top-[10px] left-[10] z-20 object-cover"
                        src={ sonati_logo } width="140" height="48" alt=""
                    />

                    <p className="td-img-p">
                        <span className="text-emerald-700">SONATTI</span>– опытный производитель шкафов-купе. В постоянно растущем ассортименте есть не только линейки серийной мебели,
                        но и эксклюзивные модели. Идеально соответствуют индивидуальным пожеланиям и даже капризам заказчика.
                    </p>

                </motion.div>
                <motion.div
                    custom={3}
                    variants={featureAnimation}
                    className="group relative mb-4 xl:top-12">
                    <img
                        className="relative z-0 w-full lg:w-[95%] h-auto object-cover"
                        src={ foodzhi_bg }  alt=""
                    />
                    <div className="sm:block xl:hidden xl:group-hover:block absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70"></div>
                    <img
                        className="absolute top-[10px] left-[10] z-20 object-cover"
                        src={ foodzhi_logo } width="140" height="48" alt=""
                    />
                    <p className="td-img-p">
                        <span className="text-emerald-700">FOODZHI</span> – опытный производитель шкафов-купе. В постоянно растущем ассортименте есть не только линейки серийной мебели,
                        но и эксклюзивные модели. Идеально соответствуют индивидуальным пожеланиям и даже капризам заказчика.
                    </p>
                </motion.div>
                <motion.div
                    custom={4}
                    variants={featureAnimation}
                    className="group relative mb-4 ">
                    <img
                        className="relative z-0 w-full lg:w-[95%] h-auto object-cover"
                        src={ hostinn_bg }  alt=""
                    />
                    <div className="sm:block xl:hidden xl:group-hover:block absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70"></div>
                    <img
                        className="absolute top-[10px] left-[10] z-20 object-cover"
                        src={ hostinn_logo } width="140" height="48" alt=""
                    />
                    <p className="td-img-p">
                        <span className="text-emerald-700">HOSTINN</span>– опытный производитель шкафов-купе. В постоянно растущем ассортименте есть не только линейки серийной мебели,
                        но и эксклюзивные модели. Идеально соответствуют индивидуальным пожеланиям и даже капризам заказчика.
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Trademarks;