import React from 'react';
import {Helmet} from "react-helmet";

import Optimization from "@/components/Optimization/Optimization.jsx";
import Overview from "@/components/Overview/Overview.jsx";
import Reviews from "@/components/Reviews/Reviews.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import Header from "@/components/Header/Header.jsx";
import About from "@/components/About/About.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const Recleaner = () => {
    return (
        <>
            <Helmet>
                <title>Recleaner</title>
                <link rel="icon" type="image/svg+xml" href="/recleaner.ico"/>
            </Helmet>
            <Header/>
            <main>
                <Overview/>
                <Reviews/>
                <Optimization/>
                <About/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};

export default Recleaner;