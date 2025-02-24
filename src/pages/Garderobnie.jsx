import React from 'react';
import ImageGallery from '../Components/imagegallery/ImageGallery.jsx';
import {garOpen01} from "../assets/products/garderobnie/1-gard-sys-space-open-01/index.js";
import {garMystery02} from "../assets/products/garderobnie/2-gard-sys-space-mystery-02/index.js";
import {gardali03} from "../assets/products/garderobnie/3-gard-sys-space-dali-03/index.js";
import {garMystery04} from "../assets/products/garderobnie/4-gard-sys-space-mystery-04/index.js";
import {gardali06} from "../assets/products/garderobnie/6-gard-sys-space-dali-06/index.js";
import {garTwist07} from "../assets/products/garderobnie/7-gard-sys-space-twist-07/index.js";
import {garMystery09} from "../assets/products/garderobnie/9-gard-sys-space-mystery-09/index.js";
import {garOpen11} from "../assets/products/garderobnie/11-gard-sys-space-open-11/index.js";
import {garTwist11} from "../assets/products/garderobnie/11-gard-sys-space-twist-11/index.js";
import {garTwist12} from "../assets/products/garderobnie/12-gard-sys-space-twist-12/index.js";



const Garderobnie = () => {

    const allGalleries = [
        garOpen01,
        garMystery02,
        gardali03,
        garMystery04,
        gardali06,
        garTwist07,
        garMystery09,
        garOpen11,
        garTwist11,
        garTwist12,
        // добавьте другие массивы здесь
    ];

    return (
        <section className="section-container flex flex-col mb-6 md:grid md:grid-cols-2 md:gap-4 md:flex-row lg:grid-cols-3">
            {allGalleries.map((gallery, galleryIndex) => (
                <div key={galleryIndex}>

                    <ImageGallery
                        imgSrc={gallery[0].img}
                        images={gallery.map(g => ({ src: g.img, title: g.title, description: g.description }))}
                    />
                    <h3 className="text-gray-100 mb-2 mt-2 block text-center text-xl font-semibold">{gallery[0].title}</h3>
                    <p className="text-gray-100 block text-center text-lg ">{gallery[0].description}</p>
                </div>
            ))}
        </section>
    );
};

export default Garderobnie;