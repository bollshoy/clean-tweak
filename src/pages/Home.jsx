import React from 'react';

import useScrollToSection from "@/hooks/useScrollToSection.jsx";
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
    const {refs, scrollToSection} = useScrollToSection();

    return (
        <>
            <Header scrollToSection={scrollToSection}/>
            <main>
                <Hero/>
                <Testimonial/>
                <WidgetBot/>
                <section ref={refs.tabs}>
                    <Tab/>
                </section>
                <Security/>
                <Advantages/>
                <section ref={refs.recleaner}>
                    <Recleaner/>
                </section>
                <section ref={refs.form}>
                    <Form/>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
