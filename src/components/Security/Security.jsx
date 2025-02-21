import React from 'react';
import security from "@/data/security.js";
import './Security.css';

const Security = () => {
	return (
			<section className="security">
				<div className="security__container">
					<h3 className="security__title">
						Производительность <span>ПК</span> будет <span>выше</span>
					</h3>
					<p className="security__text">Приготовьтесь влюбиться в игры
						заново</p>
					<div className="security__content">
						{security.map((item) => (
								<div key={item.id} className="security__wrapper">
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
