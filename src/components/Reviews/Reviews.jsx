import React from 'react';
import recleaner from "@/data/recleaner.js";

import './Reviews.css'

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="reviews__container container">
                <h6 className="reviews__title">Ваше доверие — наш приоритет.</h6>
                <span className="reviews__subtitle">Ваш ПК будет работать так, как не работал никогда раньше.</span>
                <div className="reviews__content">
                    {recleaner.map((item) => (
                        <div className="reviews__item" key={item.id}>
                            <div className="item__title">
                                <a href={item.href} className="item__link">
                                    <span>{item.title}</span>
                                    <img src={item.src} alt={item.alt} className="item__img"/>
                                </a>
                            </div>
                            <p className="item__text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;