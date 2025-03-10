import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import clients from "@/data/clients.js";
import gsap from "gsap";
import "./Clients.css";

const Clients = () => {
	const itemsRef = useRef([]);
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const hasAnimated = useRef(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !hasAnimated.current) {
							setIsVisible(true);
							hasAnimated.current = true;
						}
					});
				},
				{threshold: 0.2}
		);
		
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		
		return () => observer.disconnect();
	}, []);
	
	useLayoutEffect(() => {
		if (isVisible) {
			if (window.innerWidth > 992) {
				const tl = gsap.timeline();
				itemsRef.current.forEach((el, index) => {
					if (!el) return;
					
					const direction = index % 2 === 0 ? -100 : 100;
					const delay = index * 0.2;
					
					gsap.fromTo(
							el,
							{opacity: 0, x: direction, scale: 0.8},
							{
								opacity: 1,
								x: 0,
								scale: 1,
								duration: 0.8,
								delay,
								ease: "power3.out",
							}
					);
				});
			} else {
				itemsRef.current.forEach((el) => {
					if (el) {
						el.style.opacity = 1;
						el.style.transform = "translateX(0) scale(1)";
					}
				});
			}
		}
	}, [isVisible]);
	
	return (
			<section className="clients" ref={sectionRef}>
				<div className="clients__container container">
					<h4 className="clients__title">
						Наши клиенты и <br/>
						те, кто выбрал нас:
					</h4>
					<div className="clients__content">
						{clients.map((item, index) => (
								<div
										className="clients__item"
										key={item.id}
										ref={(el) => (itemsRef.current[index] = el)}
										style={{opacity: 0}}
								>
									<img
											src={item.src}
											alt="clients images"
											loading="lazy"
											className={`clients__img ${
													item.title === "REDraGEN" ? "clients__img-redragen" : ""
											}`}
									/>
									<a href={item.href} target={"_blank"}
									   className="clients__link">
										<div className="clients__title-content">
											<img
													src={item.icon}
													alt="icon social media"
													loading="lazy"
													className="clients__item-icon"
											/>
											<span className="clients__item-title">{item.title}</span>
										</div>
									</a>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Clients;
