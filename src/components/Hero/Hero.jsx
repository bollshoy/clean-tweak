import React, {useCallback, useState} from 'react';
import Typewriter from "@/components/Typewriter/Typewriter.jsx";

import heroImg from '@/assets/images/logo.png';
import accordionItems from "@/data/accordion.js";

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
                        Оптимизируйте свой компьютер с CleanTweaking! Мы повысим FPS и снизим задержки. <br/>
                        Услуга <span>Ultimate Optimization</span> включает удаление ненужных файлов, обновление <br/>
                        драйверов и настройку для игр. Если ваш компьютер тормозит, свяжитесь с нами <br/>
                        для улучшения производительности!
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
                                            <div className="accordion__cross">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
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
