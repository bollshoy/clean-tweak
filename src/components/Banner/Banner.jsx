import React, { useCallback } from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import bannerImg from "@/assets/images/banner.webp";

import "./Banner.css";

const Banner = () => {
	const scrollToFrom = useCallback(() => {
		window.scrollBy({
			top: 1000,
			behavior: "smooth",
		});
	});
	
	return (
			<section className="banner">
				<div className="banner__container container">
					<div className="banner__content">
						<span className="banner__subtitle">shop</span>
						<h6 className="banner__title">
							Магазин услуг <br />
							CleanTweaking.
						</h6>
						<button onClick={scrollToFrom} className="banner__link">
							К покупкам
						</button>
					</div>
					<div className="banner__img">
						<LazyLoadImage src={bannerImg} alt="banner" loading="lazy"/>
					</div>
				</div>
			</section>
	);
};

export default Banner;
