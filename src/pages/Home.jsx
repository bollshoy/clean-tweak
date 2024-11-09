import React from 'react';

import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Services from '@/components/Services/Services.jsx';
import Security from "@/components/Security/Security.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Tab from '@/components/Tab/Tab.jsx';
import WidgetBot from "@/components/WidgetBot/WidgetBot.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Testimonial/>
                <WidgetBot/>
                <Tab/>
                <Security/>
                <Services/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
