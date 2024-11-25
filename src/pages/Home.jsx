import React, {useRef} from 'react';

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
    const tabsRef = useRef(null);
    const recleanerRef = useRef(null);
    const formRef = useRef(null);

    const scrollToSection = (section) => {
        const targetRef = {
            tabs: tabsRef,
            recleaner: recleanerRef,
            form: formRef,
        }[section];

        if (targetRef?.current) {
            const offset = 70;
            const targetPosition = targetRef.current.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Header scrollToSection={scrollToSection}/>
            <main>
                <Hero/>
                <Testimonial/>
                <WidgetBot/>
                <section ref={tabsRef}>
                    <Tab/>
                </section>
                <Security/>
                <Advantages/>
                <section ref={recleanerRef}>
                    <Recleaner/>
                </section>
                <section ref={formRef}>
                    <Form/>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;