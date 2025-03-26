import React from 'react';
import Aboutcontainer from "../Components/Aboutcontainer.jsx";
import CollaborationSteps from "../Components/CollaborationSteps.jsx";
import Trademarks from "../Components/Trademarks.jsx";
import Slider from "../Components/Slider.jsx";
import ReviewSlider from "../Components/Reviews.jsx";


const Home = () => {
    return (
        <>
            <div className="clear-both"></div>
            <Slider />
            {/*<Hero />*/}
            <div className="clear-both"></div>

            <Aboutcontainer />
            <div className="clear-both"></div>

            <CollaborationSteps />
            <div className="clear-both"></div>

            <Trademarks />
            <div className="clear-both"></div>

            <ReviewSlider />
            <div className="clear-both"></div>

        </>
    );
};

export default Home;