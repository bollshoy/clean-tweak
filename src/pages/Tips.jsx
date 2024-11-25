import React from 'react';

import Windows from "@/components/Windows/Windows.jsx";
import Drivers from "@/components/Drivers/Drivers.jsx";
import Header from "@/components/Header/Header.jsx";
import About from "@/components/About/About.jsx";
import Conclusion from "@/components/Conclusion/Conclusion.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Libraries from "@/components/Libraries/Libraries.jsx";

const Tips = () => {

    return (
        <section className={'tips'}>
            <Header/>
            <About/>
            <Windows/>
            <Drivers/>
            <Libraries/>
            <Conclusion/>
            <Footer/>
        </section>
    );
};

export default Tips;