import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar1 from "./Navbar1.jsx";
import Footer from "./Footer.jsx";
import { MToTopBtn } from "./ToTopBtn.jsx";
import { useScroll } from "framer-motion";

const top = () => {
    window.scrollTo(0, 0);
}

const Layout = () => {
    const { scrollY } = useScroll();
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (value) => {
            setShowButton(value > 500);
        });

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <>
            <Navbar1 />
            <div className="clear-both"></div>
            <Outlet />
            {showButton && (
                <MToTopBtn onClick={top} />
            )}
            <Footer />
        </>
    );
};

export default Layout;
