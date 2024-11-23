import React from 'react';
import Navbar from "@/components/Navbar/Navbar.jsx";
import { icons } from '@/data/icons.js';
import './Header.css';

const Header = ({ scrollToSection }) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <span className="logo">CleanTweaking</span>
                </div>
                <Navbar scrollToSection={scrollToSection} />
                <div className="header__icons">
                    {icons.map((item) => (
                        <div key={item.id} className="icons__item">
                            <a target="_blank" href={item.href}>
                                <img src={item.src} alt={item.alt} className="icons__icon" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
