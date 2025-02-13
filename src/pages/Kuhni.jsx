import React from 'react';
import ImageGallery from '../Components/imagegallery/ImageGallery.jsx';
import {garniturAnna} from "../assets/products/kuhni/1-garn-anna"
import {garnAngelika} from "../assets/products/kuhni/2-garn-angelika"
import {garnShely} from "../assets/products/kuhni/3-garn-sheyli"
import {garnGerda} from "../assets/products/kuhni/4-garn-gerda"
import {garnAnnabelle} from "../assets/products/kuhni/5-garn-annabel"
import {garnLaura} from "../assets/products/kuhni/6-garn-laura"
import {garnBurito} from "../assets/products/kuhni/7-garn-burito"
import {garnAmanto} from "../assets/products/kuhni/8-garn-amanto"
import {garnLavida} from "../assets/products/kuhni/9-garn-lavido"
import {garnWilde} from "../assets/products/kuhni/10-garn-uald"
import {garnPersia} from "../assets/products/kuhni/11-garn-persia"
import {garnMaris} from "../assets/products/kuhni/12-garn-maris"
import {garnCharlie} from "../assets/products/kuhni/13-garn-charly"
import {garnBernardo} from "../assets/products/kuhni/14-garn-bernardo"
import {garnGabriel} from "../assets/products/kuhni/15-garn-gabriel/index.js";
import {garnPerry} from "../assets/products/kuhni/16-garn-perri/index.js";
import {garnCream} from "../assets/products/kuhni/17-garn-pcrem/index.js";
import {garnMilana} from "../assets/products/kuhni/18-garn-milana/index.js";
import {garnPlombir} from "../assets/products/kuhni/19-garn-plombir/index.js";
import {garnBernando} from "../assets/products/kuhni/20-garn-bernardo"


const Kuhni = () => {
    const allGalleries = [
        garniturAnna,
        garnAngelika,
        garnShely,
        garnGerda,
        garnAnnabelle,
        garnLaura,
        garnBurito,
        garnAmanto,
        garnLavida,
        garnWilde,
        garnPersia,
        garnMaris,
        garnCharlie,
        garnBernardo,
        garnGabriel,
        garnPerry,
        garnCream,
        garnMilana,
        garnPlombir,
        garnBernando,
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

export default Kuhni;