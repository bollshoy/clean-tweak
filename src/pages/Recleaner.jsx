import React from 'react';
import {Helmet} from "react-helmet";

import Header from "@/components/Header/Header.jsx";

const Recleaner = () => {
    return (
        <>
            <Helmet>
                <title>Recleaner</title>
                <link rel="icon" type="image/svg+xml" href="/recleaner.ico"/>
            </Helmet>
            <Header/>
            <main>
            </main>
        </>
    );
};

export default Recleaner;