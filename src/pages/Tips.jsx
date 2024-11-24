import React from 'react';

import DeviceManager from "@/components/DeviceManager/DeviceManager.jsx";
import Windows from "@/components/Windows/Windows.jsx";
import Drivers from "@/components/Drivers/Drivers.jsx";
import Header from "@/components/Header/Header.jsx";
import About from "@/components/About/About.jsx";
import Debloat from "@/components/Debloat/Debloat.jsx";
import Conclusion from "@/components/Conclusion/Conclusion.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const Tips = () => {
    return (
        <section className={'tips'}>
            <Header/>
            <About/>
            <Windows/>
            <Drivers/>
            <DeviceManager/>
            <Debloat/>
            <Conclusion/>
            <Footer/>
        </section>
    );
};

export default Tips;