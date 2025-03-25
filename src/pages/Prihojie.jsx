import React from 'react';
import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {prih003} from "../assets/products/prihojie/1-ids-003/index.js";
import {prih005} from "../assets/products/prihojie/2-ids-005/index.js";
import {prih007} from "../assets/products/prihojie/3-ids-007/index.js";
import {prih008} from "../assets/products/prihojie/4-ids-008/index.js";
import {prih009} from "../assets/products/prihojie/5-ids-009/index.js";
import {prih010} from "../assets/products/prihojie/6-ids-010/index.js";
import {prih011} from "../assets/products/prihojie/7-ids-011/index.js";
import {prih012} from "../assets/products/prihojie/8-ids-012/index.js";
import {prih013} from "../assets/products/prihojie/9-ids-013/index.js";
import {prih014} from "../assets/products/prihojie/10-ids-014/index.js";

const Prihojie = () => {

    const allGalleries = [
        prih003,
        prih005,
        prih007,
        prih008,
        prih009,
        prih010,
        prih011,
        prih012,
        prih013,
        prih014,
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

export default Prihojie;