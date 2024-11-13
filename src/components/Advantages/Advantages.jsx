import React from 'react';

import advantages from "@/data/advantages.js";

import './Advantages.css'

const Advantages = () => {

    return (
        <section className="advantages">
            <h6 className="advantages__title">
                Лучшие в обслуживании, <br/>
                конфиденциальности и <br/>
                безопасности.
            </h6>
            <div className="advantages__container container">
                {advantages.map((item) => (
                    <div className="advantages__card" key={item.id}>
                        <img src={item.src} alt={item.title} className="advantages__icon"/>
                        <span className="advantages__content-title">{item.title}</span>
                        <p className="advantages__text">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Advantages;