import React from 'react';
import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {smartcube002} from "../assets/products/smartcube/2-ks-SMARTCUBE-002/index.js";
import {smartcube003} from "../assets/products/smartcube/3-ks-SMARTCUBE-003/index.js";
import {smartcube004} from "../assets/products/smartcube/4-ks-SMARTCUBE-004/index.js";
import {smartcube005} from "../assets/products/smartcube/5-ks-SMARTCUBE-005/index.js";
import {smartcube007} from "../assets/products/smartcube/7-ks-SMARTCUBE-007/index.js";
import {smartcube008} from "../assets/products/smartcube/8-ks-SMARTCUBE-008/index.js";
import {smartcube009} from "../assets/products/smartcube/9-ks-SMARTCUBE-009/index.js";
import {smartcube010} from "../assets/products/smartcube/10-ks-SMARTCUBE-010/index.js";
import {smartcube012} from "../assets/products/smartcube/12-ks-SMARTCUBE-012/index.js";
import {smartcube014} from "../assets/products/smartcube/14-ks-SMARTCUBE-014/index.js";
import {smartcube015} from "../assets/products/smartcube/15-ks-SMARTCUBE-015/index.js";
import {smartcube019} from "../assets/products/smartcube/19-ks-SMARTCUBE-019/index.js";


const KarkasnieSystemi = () => {
    const allGalleries = [
        smartcube002,
        smartcube003,
        smartcube004,
        smartcube005,
        smartcube007,
        smartcube008,
        smartcube009,
        smartcube010,
        smartcube012,
        smartcube014,
        smartcube015,
        smartcube019,
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

export default KarkasnieSystemi;