import React, { useState } from "react";
import Modal from "@/components/Modal/Modal.jsx";
import form from "@/data/form.js";
import { motion } from "framer-motion";
import "./Form.css";

const Form = () => {
	const [formModalActive, setFormModalActive] = useState(false);
	
	const handleFormModalOpen = () => {
		setFormModalActive(true);
	};
	
	const iconVariants = {
		hidden: { opacity: 0, scale: 0.5, rotate: -10, y: 50 },
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			rotate: 0,
			y: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.4,
				ease: "backOut"
			}
		}),
		hover: {
			scale: 1.2,
			rotate: 5,
			boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
			transition: { duration: 0.3, ease: "easeOut" }
		}
	};
	
	return (
			<section className="form" id="form">
				<div className="form__container container">
					<div className="form__content">
						<h6 className="form__title">
							Свяжитесь с нами удобным для вас способом
						</h6>
						<p className="form__text">
							У компании CleanTweaking есть множество способов связи. Мы готовы помочь вам с любыми запросами.
						</p>
					</div>
					<div className="form__icon">
						{form.map((item, index) => (
								<motion.div
										key={item.id}
										className="icon__item"
										variants={iconVariants}
										initial="hidden"
										animate="visible"
										whileHover="hover"
										custom={index}
								>
									{item.id === 2 ? (
											<div
													onClick={handleFormModalOpen}
													className="icon__link"
													style={{ cursor: "pointer" }}
											>
												<img src={item.src} alt="" className="icon__icon"/>
												<span className="item__link">{item.title}</span>
											</div>
									) : (
											<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="icon__link"
											>
												<img src={item.src} alt="" className="icon__icon"/>
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
