import React, {useState, useEffect, useRef, useCallback} from "react";
import icon from "@/assets/icons/accordionIcon.png";
import close from "@/assets/icons/close.png";
import accordionItems from "@/data/accordion.js";
import heroImg from "@/assets/images/logo.png";
import {NavLink} from "react-router-dom";
import gsap from "gsap";

import "./Hero.css";

const Hero = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	
	const imgRef = useRef(null);
	const textRef = useRef(null);
	const accordionRefs = useRef([]);
	
	const setAccordionRef = useCallback((el, index) => {
		if (el) {
			accordionRefs.current[index] = el;
		}
	}, []);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !hasAnimated) {
							gsap.fromTo(
									imgRef.current,
									{y: -200, opacity: 0},
									{y: 0, opacity: 1, duration: 1, delay: .8, ease: "power2.out"}
							);
							
							gsap.fromTo(
									textRef.current,
									{x: 200, opacity: 0},
									{
										x: 0,
										opacity: 1,
										duration: 1.5,
										delay: .7,
										ease: "power2.out",
									}
							);
							
							accordionRefs.current.forEach((el, index) => {
								if (el) {
									gsap.fromTo(
											el,
											{y: 100, opacity: 0},
											{
												y: 0,
												opacity: 1,
												duration: 2.5,
												delay: 1 + index * 0.3,
												ease: "power2.out",
											}
									);
								}
							});
							
							setHasAnimated(true);
						}
					});
				},
				{threshold: 0.1}
		);
		
		observer.observe(imgRef.current);
		
		return () => observer.disconnect();
	}, [hasAnimated]);
	
	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
			<section className="hero" id="hero">
				<div className="hero__container container">
					<div className="hero__img" ref={imgRef}>
						<img src={heroImg} alt="heroImg"/>
					</div>
					<div className="hero__content">
						<h2 className="hero__title">CleanTweaking</h2>
						<p className="hero__text" ref={textRef}>
							Настройте свой компьютер с CleanTweaking! Мы повысим FPS и снизим
							задержки. Услуга Ultimate Optimization включает удаление ненужных
							файлов, обновление драйверов и настройку для игр. Если ваш
							компьютер
							тормозит, свяжитесь с нами для улучшения производительности!
						</p>
						<NavLink to={"/shop"} className="hero__btn">
							Купить настройку
						</NavLink>
						<div className="accordion">
							<div className="accordion__container">
								<div className="accordion__accordion">
									{accordionItems.map((item, index) => (
											<div
													key={item.id}
													className="accordion__item"
													ref={(el) => setAccordionRef(el, index)}
											>
												<div
														className="accordion__title"
														onClick={() => toggleAccordion(index)}
												>
													<div className="accordion__title-content">
														<img src={icon} alt="" className="accordion__icon"/>
														<span>{item.title}</span>
													</div>
													<img
															src={close}
															alt=""
															className={`accordion__icon-close ${
																	openIndex === index ? "rotate" : ""
															}`}
													/>
												</div>
												<div
														className="accordion__content"
														style={{
															maxHeight: openIndex === index ? "100px" : "0",
															overflow: "hidden",
															transition: "max-height 0.3s ease",
														}}
												>
													<p className="accordion__text">{item.content}</p>
												</div>
											</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Hero;
