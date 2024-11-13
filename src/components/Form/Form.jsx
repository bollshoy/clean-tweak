import React from 'react';

import form from "@/data/form.js";

import './Form.css';

const Form = () => {
    return (
        <section className="form">
            <div className="form__container container">
                <div className="form__content">
                    <h6 className="form__title">
                        Свяжитесь с нами<br/> удобным для вас способом
                    </h6>
                    <p className="form__text">
                        У компании CleanTweaking есть множество способов связи.<br/> Мы готовы помочь вам с любыми
                        запросами,
                        пожеланиями или отзывами.
                    </p>
                </div>
                <div className="form__icon">
                    {form.map((item) => (
                        <div key={item.id} className="icon__item">
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="icon__link">
                                <img src={item.src} alt="" className="icon__icon"/>
                                <a href={item.href} className="item__link">{item.title}</a>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Form;
