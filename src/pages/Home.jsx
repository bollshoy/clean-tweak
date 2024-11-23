import React, { useRef } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

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

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
    const heroRef = useRef(null);
    const tabsRef = useRef(null);
    const recleanerRef = useRef(null);
    const formRef = useRef(null);

    const scrollToSection = (section) => {
        const targetRef = {
            hero: heroRef,
            tabs: tabsRef,
            recleaner: recleanerRef,
            form: formRef,
        }[section];

        if (targetRef?.current) {
            gsap.to(window, {
                scrollTo: { y: targetRef.current.offsetTop, autoKill: true },
                duration: 1,
            });
        }
    };


    return (
        <>
            <Header scrollToSection={scrollToSection} />
            <main>
                <section ref={heroRef}>
                    <Hero />
                </section>
                <Testimonial />
                <WidgetBot />
                <section ref={tabsRef}>
                    <Tab />
                </section>
                <Security/>
                <Advantages />
                <section ref={recleanerRef}>
                    <Recleaner />
                </section>
                <section ref={formRef}>
                    <Form />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
