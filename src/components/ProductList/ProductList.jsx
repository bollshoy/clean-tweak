import React from "react";
import categories from "@/data/categories.js";
import "./ProductList.css";

const ProductList = ({selectedCategory}) => {
	const currentCategory = categories.find(
			(category) => category.title === selectedCategory
	);
	
	return (
			<section className="product">
				<div className="product__container">
					<div className="categories__list">
						<h6 className="product__title">Категория {selectedCategory}:</h6>
						<ul className="product__list">
							{currentCategory?.items?.length ? (
									currentCategory.items.map((item, index) => (
											<li
													className="product__item"
													key={index}
													style={{backgroundImage: `url(${item.src})`}}
											>
												<div className="product__overlay">
													<span
															className="product__item-title">{item.title}</span>
													<div className="product__item-line"></div>
													<p className="product__item-text">{item.description}</p>
													<p className="product__item-time">
														Время выполнения услуги: <span>{item.time}</span>
													</p>
													<a
															target={"_blank"}
															href="https://discord.gg/Ea8FuHNuJT"
															className="product__item-link"
													>
														Купить
													</a>
												</div>
											</li>
									))
							) : (
									<p>Нет доступных элементов</p>
							)}
						</ul>
					</div>
				</div>
			</section>
	);
};

export default ProductList;
