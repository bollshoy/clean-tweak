import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar/Navbar.jsx";
import { icons } from '@/data/icons.js';
import { motion } from "framer-motion";
import './Header.css';

const Header = ({ scrollToSection }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	return (
			<motion.header
					className={`header ${isScrolled ? "scrolled" : ""}`}
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="header__container">
					<motion.div
							className="header__logo"
							initial={{ opacity: 0, scale: 0.8, y: -20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
					>
						<span className="logo">CleanTweaking</span>
					</motion.div>
					<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
					>
						<Navbar scrollToSection={scrollToSection} />
					</motion.div>
					<motion.div
							className="header__icons"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
					>
						{icons.map((item, index) => (
								<motion.div
										key={item.id}
										className="icons__item"
										initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
										animate={{ opacity: 1, scale: 1, rotate: 0 }}
										transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 + index * 0.1 }}
										whileHover={{ scale: 1.2, rotate: 5 }}
								>
									<a target="_blank" rel="noopener noreferrer" href={item.href}>
										<img src={item.src} alt={item.alt} className="icons__icon" />
									</a>
								</motion.div>
						))}
					</motion.div>
				</div>
			</motion.header>
	);
};

export default Header;
