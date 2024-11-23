import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="header__menu">
            <div className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="header__list">
                <li>
                    <button className="header__link" onClick={() => scrollToSection('hero')}>
                        Главная
                    </button>
                </li>
                <li>
                    <button className="header__link" onClick={() => scrollToSection('tabs')}>
                        Оптимизация
                    </button>
                </li>
                <li>
                    <button className="header__link" onClick={() => scrollToSection('recleaner')}>
                        Recleaner
                    </button>
                </li>
                <li>
                    <button className="header__link" onClick={() => scrollToSection('form')}>
                        Контакты
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
