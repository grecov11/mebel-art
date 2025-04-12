import React from 'react';

import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {sh1} from "../assets/products/shkafi-raspashnie/1-sh-r-TWIST/index.js";
import {sh2} from "../assets/products/shkafi-raspashnie/2-sh-r-TWIST/index.js";
import {sh3} from "../assets/products/shkafi-raspashnie/3-sh-r-TWIST/index.js";
import {sh4} from "../assets/products/shkafi-raspashnie/4-sh-r-TWIST/index.js";
import {sh5} from "../assets/products/shkafi-raspashnie/5-sh-r-TWIST/index.js";
import {sh6} from "../assets/products/shkafi-raspashnie/6-sh-r-TWIST/index.js";
import {sh7} from "../assets/products/shkafi-raspashnie/7-sh-r-TWIST/index.js";
import {sh8} from "../assets/products/shkafi-raspashnie/8-sh-r-TWIST/index.js";
import {sh9} from "../assets/products/shkafi-raspashnie/9-sh-r-TWIST/index.js";
import {sh10} from "../assets/products/shkafi-raspashnie/10-sh-r-TWIST/index.js";
import {sh11} from "../assets/products/shkafi-raspashnie/11-sh-r-TWIST/index.js";
import {sh12} from "../assets/products/shkafi-raspashnie/12-sh-r-TWIST/index.js";

const ShkafiRaspashnie = () => {
    const allGalleries = [
        sh1,
        sh2,
        sh3,
        sh4,
        sh5,
        sh6,
        sh7,
        sh8,
        sh9,
        sh10,
        sh11,
        sh12
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

export default ShkafiRaspashnie;