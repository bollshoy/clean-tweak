import React, {useEffect, useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const menuRef = useRef(null);
	
	const handleNavLinkClick = (event, sectionId) => {
		event.preventDefault();
		navigate(`/?scrollTo=${sectionId}`);
		setIsOpen(false);
	};
	
	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	
	useEffect(() => {
		const handleClickOutside = (e) => {
			if(menuRef.current && !menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		}
	}, [])
	
	return (
			<nav className="header__menu">
				<div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={`header__list ${isOpen ? 'open' : ''}`}>
					<li><a href="#" className="header__link">Главная</a></li>
					<li>
						<a
								href="#"
								className={"header__link"}
								onClick={(e) => handleNavLinkClick(e, "recleaner")}
						>
							Recleaner
						</a>
					</li>
					<li>
						<NavLink to="/tips" className={"header__link"}>
							Полезные гайды
						</NavLink>
					</li>
					<li>
						<NavLink to="/shop" className={"header__link"}>
							Услуги
						</NavLink>
					</li>
					<li>
						<a
								href="#"
								className={"header__link"}
								onClick={(e) => handleNavLinkClick(e, "form")}
						>
							Контакты
						</a>
					</li>
				</ul>
			</nav>);
};

export default Navbar;
