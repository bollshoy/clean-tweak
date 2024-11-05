import React from 'react';
import {servicesImg, servicesIcons} from "@/data/services.js";

import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <div className="services__container">
                <div className="services__icon">
                    <h4 className="icon__title">
                        Лучшие в обслуживании, <br/>
                        конфиденциальности и <br/>
                        безопасности.
                    </h4>
                    {servicesIcons.map((item) => (
                        <div className="icon__item" key={item.id}>
                            <div className="icon__icon">
                                <img src={item.src} alt={item.alt}/>
                            </div>
                            <div className="icon__content">
                            <span className="icon__content-title">{item.title}</span>
                                <p className="icon__content-text">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services__img">
                    {servicesImg.map((item) => (
                        <div key={item.id} className="services__content">
                            <img src={item.src} alt={item.alt} className="services__image"/>
                            <span className="services__title">{item.title}</span>
                            <p className="services__text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
