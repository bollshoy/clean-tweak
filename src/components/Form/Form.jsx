import React, {useState, useEffect, useRef} from "react";
import Modal from "@/components/Modal/Modal.jsx";
import form from "@/data/form.js";
import {motion} from "framer-motion";
import "./Form.css";

const Form = () => {
	const [formModalActive, setFormModalActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	const handleFormModalOpen = () => {
		setFormModalActive(true);
	};
	
	useEffect(() => {
		const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				},
				{threshold: 0.3}
		);
		
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	
	const titleVariants = {
		hidden: {opacity: 0, y: -50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
	};
	
	const textVariants = {
		hidden: {opacity: 0, x: 50},
		visible: {
			opacity: 1,
			x: 0,
			transition: {duration: 0.8, ease: "easeOut", delay: 0.3}
		}
	};
	
	const iconVariants = {
		hidden: (i) => ({
			opacity: 0,
			scale: 0.5,
			x: i % 2 === 0 ? -100 : 100,
			y: i % 3 === 0 ? -50 : 50
		}),
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: "backOut"
			}
		}),
	};
	
	return (
			<section className="form" id="form" ref={sectionRef}>
				<div className="form__container container">
					<motion.div
							className="form__content"
							initial="hidden"
							animate={isVisible ? "visible" : "hidden"}
							variants={titleVariants}
					>
						<h6 className="form__title">Свяжитесь с нами удобным для вас
							способом</h6>
					</motion.div>
					
					<motion.p
							className="form__text"
							initial="hidden"
							animate={isVisible ? "visible" : "hidden"}
							variants={textVariants}
					>
						У компании CleanTweaking есть множество способов связи. Мы готовы
						помочь вам с любыми запросами.
					</motion.p>
					<div className="form__icon">
						{form.map((item, index) => (
								<motion.div
										key={item.id}
										className="icon__item"
										variants={iconVariants}
										initial="hidden"
										animate={isVisible ? "visible" : "hidden"}
										whileHover="hover"
										custom={index}
								>
									{item.id === 2 ? (
											<div
													onClick={handleFormModalOpen}
													className="icon__link"
													style={{cursor: "pointer"}}
											>
												<img src={item.src} alt="icon social"
												     className="icon__icon" loading="lazy"/>
												<span className="item__link">{item.title}</span>
											</div>
									) : (
											<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="icon__link"
											>
												<img src={item.src} alt="icon social"
												     className="icon__icon" loading="lazy"/>
												<span className="item__link">{item.title}</span>
											</a>
									)}
								</motion.div>
						))}
					</div>
					
					<Modal active={formModalActive} setActive={setFormModalActive}/>
				</div>
			</section>
	);
};

export default Form;
