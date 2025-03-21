import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import icons from "@/data/icons.js";

import './Conclusion.css'

const Conclusion = () => {
    return (
        <section className="conclusion">
            <div className="conclusion__container container">
                <h6 className="conclusion__title">
                    🔖Завершение
                </h6>
                <p className="conclusion__text">
                    Это были одни из самых базовых вещей, которые стоит делать, чтобы ваш ПК работал шустрее.
                    Если вы хотите добиться максимальной производительности, то тогда, мы рекомендуем обратиться к
                    нашим специалистам, чтобы они помогли вам в этом вопросе. Вы можете использовать любой удобный для
                    вас
                    способ связи с нами.⬇️
                </p>
                <div className="about__item-contact">
                    {icons.map((item) => (
                        <div key={item.id} className="about__item--link">
                            <a href={item.href} className="about__link">
                                <LazyLoadImage src={item.src} alt="icon social l" className="item__img" loading="lazy"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conclusion;