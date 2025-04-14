import React from 'react';
import ImageGallery from '../Components/imagegallery/ImageGallery.jsx';
import {port1} from "../assets/portfolio/port-1/index.js";
import {port2} from "../assets/portfolio/port-2/index.js";
import {port3} from "../assets/portfolio/port-3/index.js";
import {port4} from "../assets/portfolio/port-4/index.js";
import {port5} from "../assets/portfolio/port-5/index.js";
import {port6} from "../assets/portfolio/port-6/index.js";
import {port7} from "../assets/portfolio/port-7/index.js";
import {port8} from "../assets/portfolio/port-8/index.js";

const Portfolio = () => {

    const allGalleries = [
        port1,
        port2,
        port3,
        port4,
        port5,
        port6,
        port7,
        port8,
        port9,
    ];

    return (
         <div>
             <h2 className="text-2xl font-bold text-center mb-6 mt-10 text-gray-100">Выполненные работы</h2>
            <section className="section-container flex flex-col mb-6 md:grid md:grid-cols-2 md:gap-4 md:flex-row lg:grid-cols-3">

                {allGalleries.map((gallery, galleryIndex) => (
                    <div key={galleryIndex}>

                        <ImageGallery
                            imgSrc={gallery[0].img}
                            images={gallery.map(g => ({ src: g.img, title: "", description: "" }))}
                        />
                        {/*<h3 className="text-gray-100 mb-2 mt-2 block text-center text-xl font-semibold">{gallery[0].title}</h3>*/}
                        {/*<p className="text-gray-100 block text-center text-lg ">{gallery[0].description}</p>*/}
                    </div>
                ))}
            </section>
         </div>
    );
};

export default Portfolio;