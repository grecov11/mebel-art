import React from 'react';
import ImageGallery from "../Components/imagegallery/ImageGallery.jsx";
import {gostBlanche8} from "../assets/products/gostinnie/1-mod-stenka-BLANCHE-08/index.js";
import {gostDinamika1} from "../assets/products/gostinnie/2-mod-stenka-DINAMIKA-01/index.js";
import {gostEGO1} from "../assets/products/gostinnie/3-mod-stenka-EGO-01/index.js";
import {gostEGO2} from "../assets/products/gostinnie/4-mod-stenka-EGO-02/index.js";
import {gostLegato1} from "../assets/products/gostinnie/5-mod-stenka-LEGATO-01/index.js";
import {gostMolly2} from "../assets/products/gostinnie/6-mod-stenka-MOLLY-02/index.js";
import {gostMolly20} from "../assets/products/gostinnie/7-mod-stenka-MOLLY-20/index.js";
import {gostTimes8} from "../assets/products/gostinnie/8-mod-stenka-TIMES-08/index.js";
import {gostTimes17} from "../assets/products/gostinnie/9-mod-stenka-TIMES-17/index.js";

const Gostinnie = () => {

    const allGalleries = [
        gostBlanche8,
        gostDinamika1,
        gostEGO1,
        gostEGO2,
        gostLegato1,
        gostMolly2,
        gostMolly20,
        gostTimes8,
        gostTimes17,
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

export default Gostinnie;