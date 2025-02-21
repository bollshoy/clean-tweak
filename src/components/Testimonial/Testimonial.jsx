import React, { useEffect, useRef, useState } from 'react';
import { reviews } from '@/data/reviews.js';

import './Testimonial.css';

const Testimonial = () => {
	const [progress, setProgress] = useState(0);
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	
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
		
		return () => {
			clearInterval(progressInterval);
		};
	}, []);
	
	return (
			<section className="testimonial">
				<div className="testimonial__container container">
					<div className="testimonial__content">
						<h2 className="testimonial__title">
							Отзывы людей, которые нам доверились
						</h2>
						<div className="testimonial__content-content">
							<div className="progress-bar">
								<div className="progress" style={{ width: `${progress}%` }} />
							</div>
							<span className="testimonial__content-title">
                            {reviews[currentReviewIndex].name}
                        </span>
							<div className="testimonial__stars">{reviews[currentReviewIndex].stars}</div>
							<p className="testimonial__text">{reviews[currentReviewIndex].review}</p>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Testimonial;
