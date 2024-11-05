import React from 'react';
import {NavLink} from "react-router-dom";

import icons from "@/data/icons.js";
import telegram from '@/assets/icons/telegram.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';

import './Footer.css'

const Footer = () => {
    return (
        <section className={'footer'}>
            <div className="footer__container container">
                <div className="footer__logo">
                    <span className="logo">CleanTweaking</span>
                </div>
                <div className="footer__content">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__link">Главная</a>
                        </li>
                        <li className="footer__item">
                            <a href='/' className="footer__link">Настройка</a>
                        </li>
                        <li className="footer__item">
                            <NavLink to={'/recleaner'} className="footer__link">Recleaner</NavLink>
                        </li>
                        <li className="footer__item">
                            <a href='/' to={''} className="footer__link">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <span className="contact__title">Позвоните или напишите нам.<br/> Мы всегда на связи в любое время!</span>
                    <div className="contact__item">
                        <p className="footer__item">+79013364878</p>
                        <div className="contact__img">
                            <img src={telegram} alt=""/>
                            <img src={whatsapp} alt=""/>
                        </div>
                    </div>
                    <p className="footer__item">gamerboy131964@gmail.com</p>
                </div>
                <div className="footer__line"></div>
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