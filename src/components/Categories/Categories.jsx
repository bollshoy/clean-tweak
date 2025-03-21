import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import categories from "@/data/categories.js";
import "./Categories.css";

const Categories = ({ selectedCategory, handleCategoryChange }) => {
	const currentCategory = categories.find(
			(category) => category.title === selectedCategory
	);
	
	return (
			<section className="categories">
				<div className="categories__container">
					<div className="categories__content">
						<span className="categories__title">Категории</span>
						<div className="categories__category">
							{categories.map((category) => (
									<div
											key={category.id}
											className={`category__item ${
													selectedCategory === category.title ? "active" : ""
											}`}
											onClick={() => handleCategoryChange(category.title)}
									>
										<button className="category__btn">
											<LazyLoadImage
													src={category.src}
													alt="category icon btn"
													className="category__icon"
													loading="lazy"
											/>
											{category.title}
										</button>
									</div>
							))}
						</div>
					</div>
				</div>
			</section>
	);
};

export default Categories;
