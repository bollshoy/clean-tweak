import React from 'react';
import clients from '@/data/clients.js';
import './Clients.scss';

const Clients = () => {
	return (
			<section className="clients">
				<div className="clients__container">
					<h4 className="clients__title">
						Наши клиенты и люди <br />
						которые нам доверились:
					</h4>
					<div className="clients__content">
						{clients.map((item) => (
								<div className="clients__item" key={item.id}>
									<img
											src={item.src}
											alt={item.title}
											className={`clients__img ${item.title === 'REDraGEN' ? 'clients__img-redragen' : ''}`}
											style={item.title === 'REDraGEN' ? { filter: 'invert(1)' } : {}}
									/>
									<div className="clients__title-content">
										<img src={item.icon} alt={item.title} className="clients__item-icon" />
										<span className="clients__item-title">{item.title}</span>
									</div>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Clients;
