import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "@/components/Navbar/Navbar.jsx";
import icons from "@/data/icons.js";
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const startSection = document.getElementById('start');

      if (!heroSection || !startSection) return;
      
      if (location.pathname === '/' && window.scrollY > startSection.offsetHeight) {
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
  }, [location.pathname]);

  const shouldShowHeader = location.pathname === '/' ? isVisible : true;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${shouldShowHeader ? 'visible' : 'hidden'}`}>
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
