import React, {useCallback} from 'react';
import bannerImg from '@/assets/images/banner.png';

import './Banner.css';

const Banner = () => {
	
	const scrollToFrom = useCallback(() => {
		window.scrollBy({
			top: 1000,
			behavior: 'smooth',
		});
	});
	
	return (
			<section className="banner">
				<div className="banner__container">
					<div className="banner__content">
						<span className="banner__subtitle">shop</span>
						<h6 className="banner__title">
							Магазин услуг <br/>
							CleanTweaking.
						</h6>
						<button onClick={scrollToFrom} className="banner__link">К покупкам</button>
					</div>
					<div className="banner__img">
						<img src={bannerImg} alt="img"/>
					</div>
				</div>
			</section>
	);
};

export default Banner;