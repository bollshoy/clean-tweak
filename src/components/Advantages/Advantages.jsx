import React, {useEffect, useRef, useState} from "react";
import advantages from "@/data/advantages.js";
import gsap from "gsap";
import "./Advantages.css";

const Advantages = () => {
	const itemsRef = useRef([]);
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setIsVisible(true);
						}
					});
				},
				{ threshold: 0.2 }
		);
		
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		
		return () => observer.disconnect();
	}, []);
	
	useEffect(() => {
		if (isVisible && itemsRef.current.length > 0) {
			itemsRef.current.forEach((el, index) => {
				if (!el) return;
				
				const direction = index % 2 === 0 ? -1 : 1;
				const delay = index * 0.15;
				const rotate = Math.random() * 20 * direction;
				
				gsap.fromTo(
						el,
						{ opacity: 0, y: 100, rotate, scale: 0.8 },
						{
							opacity: 1,
							y: 0,
							rotate: 0,
							scale: 1,
							duration: 0.9,
							delay,
							ease: "power3.out",
						}
				);
			});
		}
	}, [isVisible]);
	
	return (
			<section className="advantages" ref={sectionRef}>
				<h6 className="advantages__title">
					Лучшие в обслуживании, <br />
					конфиденциальности и <br />
					безопасности.
				</h6>
				<div className="advantages__container container">
					{advantages.map((item, index) => (
							<div
									className="advantages__card"
									key={item.id}
									ref={(el) => (itemsRef.current[index] = el)}
									style={{ opacity: 0 }}
							>
								<img src={item.src} alt={item.title} className="advantages__icon" />
								<span className="advantages__content-title">{item.title}</span>
								<p className="advantages__text">{item.description}</p>
							</div>
					))}
				</div>
			</section>
	);
};

export default Advantages;
