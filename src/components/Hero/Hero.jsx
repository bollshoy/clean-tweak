import React, { useCallback, useState, useEffect, useRef } from 'react';
import Typewriter from "@/components/Typewriter/Typewriter.jsx";
import heroImg from '@/assets/images/logo.png';
import accordionItems from "@/data/accordion.js";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

import './Hero.css';

const Hero = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const [typedText, setTypedText] = useState('');
	
	const imgRef = useRef(null);
	const textRef = useRef(null);
	const accordionRefs = useRef([]);
	
	useEffect(() => {
		gsap.fromTo(imgRef.current, { y: -200, opacity: 0 }, {
			y: 0,
			opacity: 1,
			duration: 2,
			delay: 1,
			ease: "power2.out"
		});
		
		gsap.fromTo(textRef.current, { x: 200, opacity: 0 }, {
			x: 0,
			opacity: 1,
			duration: 1.5,
			delay: 0.7,
			ease: "power2.out"
		});
		
		accordionRefs.current.forEach((el, index) => {
			if (el) {
				gsap.fromTo(el, { y: 100, opacity: 0 }, {
					y: 0,
					opacity: 1,
					duration: 2.5,
					delay: 1 + index * 0.3,
					ease: "power2.out"
				});
			}
		});
		
	}, []);
	
	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	
	const handleTextUpdate = (newText) => {
		setTypedText(newText);
	};
	
	return (
			<section className="hero">
				<div className="hero__container">
					<div className="hero__img" ref={imgRef}>
						<img src={heroImg} alt="heroImg" />
					</div>
					<div className="hero__content">
						<div className="typing__effect">
							<Typewriter text="CleanTweaking" speed={100} onTextUpdate={handleTextUpdate} />
							<h1 className="hero__title">{typedText}</h1>
						</div>
						<p className="hero__text" ref={textRef}>
							Оптимизируйте свой компьютер с CleanTweaking!
							Мы <span>повысим FPS</span> и снизим задержки.<br />
							Услуга <span>Ultimate Optimization</span> включает удаление
							ненужных файлов, обновление <br /> драйверов и настройку <span>для игр</span>. Если
							ваш компьютер тормозит,
							свяжитесь с нами для <span>улучшения производительности!</span>
						</p>
						<NavLink to={'/shop'} className='hero__btn'>Купить оптимизацию</NavLink>
						<div className="accordion">
							<div className="accordion__container">
								<div className="accordion__accordion">
									{accordionItems.map((item, index) => (
											<div key={item.id}
											     className="accordion__item"
											     ref={el => accordionRefs.current[index] = el}>
												<div className="accordion__title"
												     onClick={() => toggleAccordion(index)}>
													<span>{item.title}</span>
												</div>
												<div className="accordion__content"
												     style={{
													     maxHeight: openIndex === index ? '100px' : '0',
													     overflow: 'hidden',
													     transition: 'max-height 0.3s ease',
												     }}>
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
