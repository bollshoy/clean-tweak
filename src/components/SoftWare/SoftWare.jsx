import React from 'react';
import software from "@/data/software.js";

import './SoftWare.css';

const SoftWare = () => {
    return (
        <section className="software">
            <div className="software__container">
                <h6 className="software__title">
                    📲 Программное обеспечение
                </h6>
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

export default SoftWare;
