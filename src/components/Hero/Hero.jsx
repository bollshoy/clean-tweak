import React, {useState} from 'react';

import heroImg from '@/assets/images/hero.jpg';
import accordionItems from "@/data/accordion.js";
import rules from "@/assets/icons/rules.svg";

import './Hero.css';

const Hero = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__img">
                    <img src={heroImg} alt="heroImg"/>
                </div>
                <div className="hero__content">
                    <h1 className="hero__title">CleanTweaking</h1>
                    <p className="hero__text">
                        Получите абсолютную производительность компьютера с помощью CleanTweaking. Эксперты <br/>
                        CleanTweaking помогут вам усовершенствовать компьютер до состояния, в котором он еще
                        небыл. <br/>
                        Безопасность, конфиденциальность и доверие никогда не будут поставлены под угрозу. Больше
                        FPS,<br/>
                        меньше задержек и сбоев. Свяжитесь с нами сегодня, и мы быстро приведем ваш компьютер в рабочее
                        состояние!
                    </p>
                    <p className="hero__text">
                        Представляем услугу CleanTweaking «Ultimate Optimization». Наши специалисты, основываясь на<br/>
                        многолетнем опыте, помогут вашему компьютеру работать на максимум. С помощью безопасного<br/>
                        удаленного доступа CleanTweaking удалят лишние файлы, проверят работоспособность, обновят<br/>
                        драйвера и настроят параметры для оптимальной производительности в играх.
                    </p>
                    <p className="hero__text">
                        Если ваш компьютер лагает или работает медленно, оптимизация — это то, что вам нужно. Она
                        не<br/>
                        только улучшает производительность, но и продлевает срок службы, снижая нагрузку на
                        компоненты.<br/>
                        Присоединяйтесь к CleanTweaking и наслаждайтесь молниеносной системой!
                    </p>
                    <a target="_blank" href="https://t.me/Clean_0K" className="hero__link">
                        Заказать оптимизацию
                    </a>
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