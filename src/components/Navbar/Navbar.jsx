import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import './Navbar.css';

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

    const handleLinkClick = (sectionId) => {
        setIsOpen(false);
        document.body.classList.remove('menu-open');

        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 100; // Задайте смещение в пикселях
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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
