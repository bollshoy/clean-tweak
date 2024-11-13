import React, { useCallback, useState } from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Navbar.css';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        gsap.to(window, { duration: 1, scrollTo: { y: 2200, autoKill: false } });
    }, []);

    const handleContactClick = useCallback(() => {
        gsap.to(window, { duration: 1, scrollTo: { y: 10000, autoKill: false } });
    }, []);

    const handleRecleanerClick = useCallback(() => {
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: false } });
    }, []);

    const handleBurgerClick = useCallback(() => {
        setOpen(!open);
    });

    return (
        <>
            <nav className="header__menu">
                <div className={`burger ${open ? 'open' : ''}`} onClick={handleBurgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`header__list ${open ? 'open' : ''}`}>
                    <li>
                        <NavLink to={'/'} onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: false } })} className={'header__link'}>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={''} onClick={handleClick} className={'header__link'}>
                            Оптимизация
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/recleaner'} onClick={handleRecleanerClick} className={'header__link'}>
                            Recleaner
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={''} onClick={handleContactClick} className={'header__link'}>
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
