import React from 'react';

import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Advantages from "@/components/Advantages/Advantages.jsx";
import WidgetBot from "@/components/WidgetBot/WidgetBot.jsx";
import Recleaner from "@/components/Recleaner/Recleaner.jsx";
import Security from "@/components/Security/Security.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Form from '@/components/Form/Form.jsx';
import Tab from '@/components/Tab/Tab.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero id="hero" />
                <Testimonial id="testimonial" />
                <WidgetBot id="widgetbot" />
                <section id="tabs">
                    <Tab />
                </section>
                <Security id="security" />
                <Advantages id="advantages" />
                <section id="recleaner">
                    <Recleaner />
                </section>
                <section id="form">
                    <Form />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
