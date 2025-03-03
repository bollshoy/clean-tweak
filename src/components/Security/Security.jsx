import React, {useEffect, useRef, useState} from 'react';
import security from "@/data/security.js";
import gsap from "gsap";
import './Security.css';

const Security = () => {
	const itemsRef = useRef([]);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setIsVisible(true);
						}
					});
				},
				{threshold: 0.3}
		);
		
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		
		return () => observer.disconnect();
	}, []);
	
	useEffect(() => {
		if (isVisible && itemsRef.current.length > 0) {
			gsap.fromTo(
					itemsRef.current,
					{opacity: 0, y: 50, scale: 0.8, rotate: -5},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						rotate: 0,
						duration: 0.6,
						stagger: 0.3,
						ease: "back.out(1.7)",
					}
			);
		}
	}, [isVisible]);
	
	return (
			<section className="security" ref={sectionRef}>
				<div className="security__container">
					<h3 className="security__title">
						Производительность <span>ПК</span> будет <span>выше</span>
					</h3>
					<p className="security__text">Приготовьтесь влюбиться в игры
						заново</p>
					<div className="security__content">
						{security.map((item, index) => (
								<div
										key={item.id}
										className="security__wrapper"
										ref={(el) => (itemsRef.current[index] = el)}
										style={{opacity: 0}}
								>
									<span className="security__number">{item.number}</span>
									<div className="security__item">
										<span
												className="security__content-title">{item.title}</span>
										<p className="security__content-text">{item.description}</p>
									</div>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Security;
