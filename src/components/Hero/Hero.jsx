import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper/modules";
import 'swiper/swiper-bundle.css';

import reviews from "@/data/reviews.js";
import heroImg from '@/assets/images/hero.jpg';
import tick from '@/assets/icons/tick.svg';
import accordionItems from "@/data/accordion.js";
import rules from "@/assets/icons/rules.svg";

import './Hero.css';

const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper && prevRef.current && nextRef.current) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, [prevRef, nextRef]);

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__img">
                    <img src={heroImg} alt="heroImg"/>
                </div>
                <div className="hero__content">
                    <h1 className="hero__title">CleanTweaking</h1>
                    <p className="hero__text">
                        Получите профессиональную производительность компьютера с помощью CleanTweaking. Эксперты <br/>
                        CleanTweaking помогут вам восстановить компьютер до состояния, в котором он еще никогда не был. <br/>
                        Безопасность, конфиденциальность и доверие никогда не будут поставлены под угрозу. Больше FPS,<br/>
                        меньше задержек и сбоев. Свяжитесь с нами сегодня, и мы быстро приведем ваш компьютер в рабочее
                        состояние!
                    </p>
                    <p className="hero__text">
                        Представляем услугу CleanTweaking «Оптимизация моего ПК». Наши специалисты, основываясь на<br/>
                        многолетнем опыте, помогут вашему компьютеру работать на максимуме. С помощью безопасного<br/>
                        удаленного доступа CleanTweaking удалит лишние файлы, проверит работоспособность, обновит<br/>
                        драйверы и настроит параметры для оптимальной производительности в играх.
                    </p>
                    <p className="hero__text">
                        Если ваш компьютер лагает или работает медленно, оптимизация — это то, что вам нужно. Она
                        не<br/>
                        только улучшает производительность, но и продлевает срок службы, снижая нагрузку на
                        компоненты.<br/>
                        Присоединяйтесь к CleanTweaking и наслаждайтесь быстрым компьютером!
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
                    <div className="hero__nav">
                        <div ref={prevRef} className="swiper-button-prev"></div>
                        <Swiper
                            ref={swiperRef}
                            className={'mySwiper'}
                            modules={[Navigation]}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            loop={true}
                            spaceBetween={10}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="review">
                                        <div className="review__title">
                                            <img src={tick} alt="tick" className="review__img" />
                                            <span className={'review__title'}>{review.name}</span>
                                        </div>
                                        <p className={'review__text'}>{review.review}</p>
                                        <div className="stars">{review.stars}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div ref={nextRef} className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
