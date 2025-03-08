import React from 'react';
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
                <div className="conclusion__contact">
                    {icons.map((item) => (
                        <div key={item.id} className="conclusion__item">
                            <a href={item.href} className="conclusion__link">
                                <img src={item.src} alt="" className="conclusion__img"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conclusion;