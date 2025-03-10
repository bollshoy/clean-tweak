import React, {useEffect, useRef, useState} from "react";
import GlitchText from "@/Animations/GlitchText/GlitchText.jsx";
import {reviews} from "@/data/reviews.js";
import gsap from "gsap";

import "./Testimonial.css";

const Testimonial = () => {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const progressRef = useRef(null);
	
	useEffect(() => {
		if (window.innerWidth > 992) {
			if (titleRef.current) {
				gsap.set(titleRef.current, {opacity: 0, x: 300});
			}
			if (contentRef.current) {
				gsap.set(contentRef.current, {opacity: 0, x: -200});
			}
			
			const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting && !hasAnimated) {
								gsap.fromTo(
										titleRef.current,
										{opacity: 0, x: 300},
										{
											opacity: 1,
											x: 0,
											duration: 1.5,
											delay: 1,
											ease: "power2.out",
										}
								);
								
								gsap.fromTo(
										contentRef.current,
										{opacity: 0, x: -200},
										{
											opacity: 1,
											x: 0,
											duration: 1.8,
											ease: "power2.out",
											delay: 1.2,
										}
								);
								
								setHasAnimated(true);
							}
						});
					},
					{threshold: 0.1}
			);
			
			if (sectionRef.current) {
				observer.observe(sectionRef.current);
			}
			
			return () => observer.disconnect();
		} else {
			if (titleRef.current) {
				gsap.set(titleRef.current, {opacity: 1, x: 0});
			}
			if (contentRef.current) {
				gsap.set(contentRef.current, {opacity: 1, x: 0});
			}
			setHasAnimated(true);
		}
	}, [hasAnimated]);
	
	useEffect(() => {
		if (window.innerWidth > 992) {
			const animateProgress = () => {
				gsap.to(progressRef.current, {
					width: "100%",
					duration: 5,
					onComplete: () => {
						setCurrentReviewIndex(
								(prevIndex) => (prevIndex + 1) % reviews.length
						);
						progressRef.current.style.width = "0%";
						animateProgress();
					},
				});
			};
			animateProgress();
			
			return () => {
				gsap.killTweensOf(progressRef.current);
			};
		}
	}, [currentReviewIndex]);
	
	return (
			<section className="testimonial" ref={sectionRef}>
				<div className="testimonial__container container">
					<div className="testimonial__content">
						<h2 className="testimonial__title" ref={titleRef}>
							Отзывы тех, кто нам
							<span>
              <GlitchText
		              speed={1}
		              enableShadows={true}
		              enableOnHover={true}
		              className="custom-class"
              >
                доверился.
              </GlitchText>
            </span>
						</h2>
						
						<div className="testimonial__content-content" ref={contentRef}>
							<div className="progress-bar">
								<div
										className="progress"
										ref={progressRef}
										style={{width: "0%"}}
								/>
							</div>
							<span className="testimonial__content-title">
              {reviews[currentReviewIndex].name}
            </span>
							<div className="testimonial__stars">
								{reviews[currentReviewIndex].stars}
							</div>
							<p className="testimonial__text">
								{reviews[currentReviewIndex].review}
							</p>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Testimonial;