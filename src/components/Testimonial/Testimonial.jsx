import React, {useEffect, useRef, useState} from 'react';
import {reviews} from '@/data/reviews.js';
import gsap from "gsap";
import './Testimonial.css';

const Testimonial = () => {
	const [progress, setProgress] = useState(0);
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);
	
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	
	useEffect(() => {
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
										ease: "power2.out"
									}
							);
							
							gsap.fromTo(
									contentRef.current,
									{opacity: 0, x: -200},
									{
										opacity: 1,
										x: 0,
										duration: 2.3,
										ease: "power2.out",
										delay: 1.5
									}
							);
							
							setHasAnimated(true);
						}
					});
				},
				{threshold: 0.3}
		);
		
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		
		return () => observer.disconnect();
	}, [hasAnimated]);
	
	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
					return 0;
				}
				return prevProgress + 20;
			});
		}, 1000);
		
		return () => clearInterval(progressInterval);
	}, []);
	
	return (
			<section className="testimonial" ref={sectionRef}>
				<div className="testimonial__container container">
					<div className="testimonial__content">
						<h2 className="testimonial__title" ref={titleRef}>
							Отзывы людей, которые нам доверились
						</h2>
						<div className="testimonial__content-content" ref={contentRef}>
							<div className="progress-bar">
								<div className="progress" style={{width: `${progress}%`}}/>
							</div>
							<span className="testimonial__content-title">
                            {reviews[currentReviewIndex].name}
                        </span>
							<div
									className="testimonial__stars">{reviews[currentReviewIndex].stars}</div>
							<p className="testimonial__text">{reviews[currentReviewIndex].review}</p>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Testimonial;
