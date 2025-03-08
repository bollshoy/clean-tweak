import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar.jsx";
import icons from "@/data/icons.js";
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Состояние для видимости хедера
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const startSection = document.getElementById('start'); // ID секции Start

      if (!heroSection || !startSection) return;

      // Получаем положение секции Hero относительно верхней границы экрана
      const heroTop = heroSection.getBoundingClientRect().top;

      // Показываем хедер, если мы прокрутили ниже Start (то есть в пределах Hero)
      if (heroTop <= window.innerHeight && window.scrollY > startSection.offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header__container container">
        <div className="header__logo">
          <a href="#">
            <span className="logo">CleanTweaking</span>
          </a>
        </div>
        <Navbar />
        <div className="header__icons">
          {icons.map(item => (
            <div className="icons__item" key={item.id}>
              <a href={item.href} className="header__link">
                <img src={item.src} alt="" className="header__icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
