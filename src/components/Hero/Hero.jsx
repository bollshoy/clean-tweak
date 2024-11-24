import React, {useCallback, useState} from 'react';
import Typewriter from "@/components/Typewriter/Typewriter.jsx";

import heroImg from '@/assets/images/logo.png';
import accordionItems from "@/data/accordion.js";
import rules from "@/assets/icons/rules.svg";

import './Hero.css';

const Hero = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [typedText, setTypedText] = useState('');

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleTextUpdate = (newText) => {
        setTypedText(newText);
    };

    const scrollToFrom = useCallback(() => {
        window.scrollBy({
            top: 7200,
            behavior: 'smooth',
        });
    });


    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__img">
                    <img src={heroImg} alt="heroImg"/>
                </div>
                <div className="hero__content">
                    <div className="typing__effect">
                        <Typewriter text="CleanTweaking" speed={100} onTextUpdate={handleTextUpdate}/>
                        <h1 className="hero__title">{typedText}</h1>
                    </div>
                    <p className="hero__text">
                        Максимальная производительность вашего компьютера с CleanTweaking! Наши эксперты помогут <br/>
                        усовершенствовать систему, обеспечивая безопасность и конфиденциальность. Больше FPS,
                        меньше <br/>
                        задержек — свяжитесь с нами, и мы быстро приведем ваш компьютер в порядок!
                    </p>
                    <p className="hero__text">
                        Предлагаем услугу «Ultimate Optimization». Мы удалим ненужные файлы, проверим <br/>
                        работоспособность, обновим драйвера и настроим параметры для оптимальной производительности в
                        играх.
                    </p>
                    <p className="hero__text">
                        Если ваш компьютер тормозит, оптимизация — это то, что вам нужно. <br/>
                        Улучшите производительность и продлите срок службы вашего устройства с CleanTweaking!
                    </p>
                    <button onClick={scrollToFrom} className="hero__btn">
                        Купить оптимизацию
                    </button>
                    <div className="accordion">
                        <div className="accordion__container">
                            <div className="accordion__accordion">
                                {accordionItems.map((item, index) => (
                                    <div key={item.id} className="accordion__item">
                                        <div className="accordion__title" onClick={() => toggleAccordion(index)}>
                                            <img src={rules} alt="rules" className="accordion__img"/>
                                            <span>{item.title}</span>
                                        </div>
                                        <div
                                            className="accordion__content"
                                            style={{
                                                maxHeight: openIndex === index ? '100px' : '0',
                                                overflow: 'hidden',
                                                transition: 'max-height 0.3s ease',
                                            }}
                                        >
                                            <p className="accordion__text">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
