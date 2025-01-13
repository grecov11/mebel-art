import React from 'react';
import Aboutcontainer from "../Components/Aboutcontainer.jsx";
import Trademarks from "../Components/Trademarks.jsx";
import Slider from "../Components/Slider.jsx";


const Home = () => {
    return (
        <>
            <div className="clear-both"></div>
            <Slider />
            {/*<Hero />*/}
            <div className="clear-both"></div>

            <Aboutcontainer />
            <div className="clear-both"></div>
            <Trademarks />
            <div className="clear-both"></div>

        </>
    );
};

export default Home;