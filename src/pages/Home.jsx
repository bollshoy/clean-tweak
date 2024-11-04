import React from 'react';

import Services from '@/components/Services/Services.jsx';
import Security from "@/components/Security/Security.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Tab from '@/components/Tab/Tab.jsx';

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Banner/>
                <Tab/>
                <Security/>
                <Services/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
