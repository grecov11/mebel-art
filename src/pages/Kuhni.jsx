import React from 'react';
import ImageGallery from '../Components/imagegallery/ImageGallery.jsx';
import { garnitur01, garnitur02 } from "../assets/products/kuhni/index.js";

const Kuhni = () => {
    const allGalleries = [
        garnitur01,
        garnitur02,
        // добавьте другие массивы здесь
    ];

    return (
        <section className="section-container flex flex-col md:flex-row">
            {allGalleries.map((gallery, galleryIndex) => (
                <div key={galleryIndex}>
                    <h2 className="text-gray-100 block text-center text-2xl font-semibold">Галерея {galleryIndex + 1}</h2>
                    <ImageGallery
                        imgSrc={gallery[0].img}
                        images={gallery.map(g => ({ src: g.img, title: g.title, description: g.description }))}
                    />
                    <h3 className="text-gray-100 block text-center text-xl font-semibold">{gallery[0].title}</h3>
                    <p className="text-gray-100 block text-center text-lg ">{gallery[0].description}</p>
                </div>
            ))}
        </section>
    );
};

export default Kuhni;