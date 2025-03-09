import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	
	const toggleMenu = () => {
		setIsOpen((prevState) => {
			const newState = !prevState;
			document.body.classList.toggle("menu-open", newState);
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
				top: offsetPosition, behavior: "smooth",
			});
		}
	};
	
	const handleNavLinkClick = (event, sectionId) => {
		event.preventDefault();
		navigate(`/?scrollTo=${sectionId}`);
	};
	
	
	return (<nav className="header__menu">
				<ul className={`header__list`}>
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
