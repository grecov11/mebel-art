import React from 'react';
import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {spal02} from "../assets/products/spalni/1-ids-02/index.js";
import {spal03} from "../assets/products/spalni/2-ids-03/index.js";
import {spal08} from "../assets/products/spalni/3-ids-08/index.js";
import {spal09} from "../assets/products/spalni/4-ids-09/index.js";
import {spal12} from "../assets/products/spalni/5-ids-12/index.js";
import {spal14} from "../assets/products/spalni/6-ids-14/index.js";
import {spal17} from "../assets/products/spalni/7-ids-17/index.js";
import {spal18} from "../assets/products/spalni/8-ids-18/index.js";
import {spal24} from "../assets/products/spalni/9-ids-24/index.js";
import {spal40} from "../assets/products/spalni/10-ids-40/index.js";

const Spalni = () => {

    const allGalleries = [
        spal02,
        spal03,
        spal08,
        spal09,
        spal12,
        spal14,
        spal17,
        spal18,
        spal24,
        spal40,
    ]

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

export default Spalni;