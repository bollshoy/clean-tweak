import React from 'react';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {NavLink} from "react-router-dom";
import {gsap} from 'gsap';

import icons from "@/data/icons.js";

import './Footer.css';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
    const handleScrollToTop = () => {
        gsap.to(window, {duration: 1, scrollTo: {y: 0, autoKill: false}});
    };

    const handleScrollToOptimization = () => {
        gsap.to(window, {duration: 1, scrollTo: {y: 2200, autoKill: false}});
    };

    const handleScrollToContacts = () => {
        gsap.to(window, {duration: 1, scrollTo: {y: document.getElementById('footer').offsetTop, autoKill: false}});
    };

    const handleRecleanerClick = () => {
        gsap.to(window, {duration: 1, scrollTo: {y: 0, autoKill: false}});
    };

    return (
        <section className={'footer'} id={'footer'}>
            <div className="footer__container container">
                <div className="footer__logo">
                    <a href={'/'} className="logo">CleanTweaking</a>
                </div>
                <div className="footer__content">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" onClick={handleScrollToTop} className="footer__link">Главная</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" onClick={handleScrollToOptimization} className="footer__link">Настройка</a>
                        </li>
                        <li className="footer__item">
                            <NavLink to={'/recleaner'} onClick={handleRecleanerClick}
                                     className="footer__link">Recleaner</NavLink>
                        </li>
                        <li className="footer__item">
                            <a href="#" onClick={handleScrollToContacts} className="footer__link">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <span className="contact__title">Позвоните или напишите нам.<br/> Мы всегда на связи в любое время!</span>
                    <p className="footer__item">
                        <a href="mailto:test@gmail.com">gamerboy131964@gmail.com</a>
                    </p>
                </div>
                <div className="footer__social">
                    {icons.map((item) => (
                        <div key={item.id} className="footer__icons">
                            <a target={'_blank'} href={item.href}>
                                <img src={item.src} alt={item.alt} className="icons__icon"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
