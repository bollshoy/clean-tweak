import React, {useState} from 'react';
import Modal from "@/components/Modal/Modal.jsx";
import form from "@/data/form.js";

import './Form.css';

const Form = () => {
    const [modalActive, setModalActive] = useState(false);
    const handleMessengerClick = () => {
        setModalActive(!modalActive); // Открываем модалку
    };
    return (
        <section className={"form"} id={'form'}>
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
                            {item.id === 2 ? (
                                <div onClick={handleMessengerClick} className="icon__link" style={{cursor: 'pointer'}}>
                                    <img src={item.src} alt="" className="icon__icon"/>
                                    <span className="item__link">{item.title}</span>
                                </div>
                            ) : (
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="icon__link">
                                    <img src={item.src} alt="" className="icon__icon"/>
                                    <span className="item__link">{item.title}</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </section>
    );
};

export default Form;
