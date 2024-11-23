import React, { useCallback, useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    const handleScrollAndCloseMenu = (section) => {
        scrollToSection(section);
        setOpen(false);
    };

    return (
        <nav className={`header__menu ${open ? 'menu-open' : ''}`}>
            <div className={`burger ${open ? 'open' : ''}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`header__list ${open ? 'open' : ''}`}>
                <li>
                    <button
                        className="header__link"
                        onClick={() => handleScrollAndCloseMenu('hero')}
                    >
                        Главная
                    </button>
                </li>
                <li>
                    <button
                        className="header__link"
                        onClick={() => handleScrollAndCloseMenu('tabs')}
                    >
                        Оптимизация
                    </button>
                </li>
                <li>
                    <button
                        className="header__link"
                        onClick={() => handleScrollAndCloseMenu('recleaner')}
                    >
                        Recleaner
                    </button>
                </li>
                <li>
                    <button
                        className="header__link"
                        onClick={() => handleScrollAndCloseMenu('form')}
                    >
                        Контакты
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
