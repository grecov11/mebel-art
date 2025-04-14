import React from 'react';

import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {spal08} from "../assets/products/spalni/3-ids-08/index.js";
import {spal12} from "../assets/products/spalni/5-ids-12/index.js";
import {spal14} from "../assets/products/spalni/6-ids-14/index.js";
import {spal24} from "../assets/products/spalni/9-ids-24/index.js";
import {spal40} from "../assets/products/spalni/10-ids-40/index.js";
import {prih003} from "../assets/products/prihojie/1-ids-003/index.js";
import {prih008} from "../assets/products/prihojie/4-ids-008/index.js";
import {prih012} from "../assets/products/prihojie/8-ids-012/index.js";

const ShkafiKupe = () => {
    const allGalleries = [
        spal08,
        spal12,
        spal14,
        spal24,
        spal40,
        prih003,
        prih008,
        prih012,
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

export default ShkafiKupe;