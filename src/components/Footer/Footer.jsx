import React from 'react';
import icons from "@/data/icons.js";

import logo from '/logo.png'

import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer" id="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <img src={logo} alt="logo" className="logo__img"/>
                    <a href="#" className="logo">CleanTweaking</a>
                </div>
                <div className="footer__contact">
                    <p className="footer__text">
                        Мы всегда на связи в любое время!
                    </p>
                    <a href="mailto:gamerboy131964@gmail.com" className="footer__link">gamerboy131964@gmail.com</a>
                </div>
                <div className="footer__social">
                    <ul className="footer__list">
                        {icons.map(item => (
                            <li className="footer__item" key={item.id}>
                                <a href={item.href} className="footer__link">
                                    <img src={item.src} alt="" className="footer__img"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
