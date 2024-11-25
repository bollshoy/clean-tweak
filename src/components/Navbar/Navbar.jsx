import React, { useState } from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const handleLinkClick = (section) => {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
        scrollToSection(section);
    };

    return (
        <nav className="header__menu">
            <div className={`burger ${isOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`header__list ${isOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to={'/'} className={'header__link'}>Главная</NavLink>
                </li>
                <li>
                    <button className="header__link" onClick={() => handleLinkClick('tabs')}>
                        Оптимизация
                    </button>
                </li>
                <li>
                    <button className="header__link" onClick={() => handleLinkClick('recleaner')}>
                        Recleaner
                    </button>
                </li>
                <li>
                    <NavLink to={'/tips'} className={'header__link'}>Полезные гайды</NavLink>
                </li>
                <li>
                    <button className="header__link" onClick={() => handleLinkClick('form')}>
                        Контакты
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;