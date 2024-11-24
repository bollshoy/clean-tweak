import React from 'react';
import libraries from "@/data/libraries.js";

import './Libraries.css'

const Libraries = () => {
    return (
        <section className="libraries">
            <div className="libraries__container">
                <h6 className="libraries__title">📚Библиотеки</h6>
                <p className="libraries__text">
                    Установка важных библиотек - это так же часть <br/>
                    успеха, от которого зависит производительность вашей
                    Windows.
                </p>
                <div className="libraries__content">
                    {libraries.map((item) => (
                        <div key={item.id} className="libraries__item">
                            <a href={item.href} className="libraries__link">{item.title}</a>
                            <p className="libraries__content--text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Libraries;