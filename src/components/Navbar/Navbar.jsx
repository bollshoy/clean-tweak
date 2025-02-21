import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            document.body.classList.toggle('menu-open', newState);
            return newState;
        });
    };
    
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 100;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const handleNavLinkClick = (event, sectionId) => {
        if (location.pathname === '/') {
            event.preventDefault();
            setIsOpen(false);
            document.body.classList.remove('menu-open');
            handleScrollToSection(sectionId);
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
                    <NavLink to={'/'} className={'header__link'} onClick={(e) => handleNavLinkClick(e, 'recleaner')}>
                        Recleaner
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/tips'} className={'header__link'}>Полезные гайды</NavLink>
                </li>
                <li>
                    <NavLink to={'/shop'} className={'header__link'}>Услуги</NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={'header__link'} onClick={(e) => handleNavLinkClick(e, 'form')}>
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
