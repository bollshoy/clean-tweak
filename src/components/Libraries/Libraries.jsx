import React from 'react';
import libraries from "@/data/libraries.js";
import software from "@/data/software.js";

import './Libraries.css'

const Libraries = () => {
    return (
        <section className="libraries">
            <div className="libraries__container">
                <h6 className="libraries__title">📚 Библиотеки и программы</h6>
                <p className="libraries__text">
                    Это неотъемлемая часть, от которой зависит производительность и <br/>
                    совместимость Windows с играми и приложениями
                </p>
                <div className="libraries__content">
                    {libraries.map((item) => (
                        <div key={item.id} className="libraries__item">
                            <a href={item.href} className="libraries__link">{item.title}</a>
                            <p className="libraries__content--text">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="software__content">
                    {software.map((item) => (
                        <div key={item.id} className="software__item">
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <span className="software__content--title">{item.title}</span>
                            </a>
                            <p className="item__text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Libraries;