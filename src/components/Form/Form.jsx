import React, {useEffect, useRef, useState} from "react";
import Modal from "@/components/Modal/Modal.jsx";
import form from "@/data/form.js";
import gsap from "gsap";

import "./Form.css";

const Form = () => {
	const [formModalActive, setFormModalActive] = useState(false);
	
	const handleFormModalOpen = () => {
		setFormModalActive(true);
	};
	
	return (
			<section className="form" id="form">
				<div className="form__container container">
					<div className="form__content">
						<h6 className="form__title">
							Свяжитесь с нами удобным для вас способом
						</h6>
						<p className="form__text">
							У компании CleanTweaking есть множество способов связи. Мы готовы
							помочь вам с любыми запросами.
						</p>
					</div>
					<div className="form__icon">
						{form.map((item) => (
								<div key={item.id} className="icon__item">
									{item.id === 2 ? (
											<div
													onClick={handleFormModalOpen}
													className="icon__link"
													style={{cursor: "pointer"}}
											>
												<img src={item.src} alt="" className="icon__icon"/>
												<span className="item__link">{item.title}</span>
											</div>
									) : (
											<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="icon__link"
											>
												<img src={item.src} alt="" className="icon__icon"/>
												<span className="item__link">{item.title}</span>
											</a>
									)}
								</div>
						))}
					</div>
					<Modal active={formModalActive} setActive={setFormModalActive}/>
				</div>
			</section>
	);
};

export default Form;
