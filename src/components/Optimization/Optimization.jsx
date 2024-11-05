import React from 'react';

import recleaner from '@/assets/images/rc.png';

import './Optimization.css'

const Optimization = () => {
    return (
        <section className="optimization">
            <div className="optimization__container">
                <div className="optimization__img">
                    <img src={recleaner} alt="recleaner"/>
                </div>
                <div className="optimization__content">
                    <h6 className="optimization__title">Максимально простой и удобный интерфейс</h6>
                    <p className="optimization__text">
                        Наш интерфейс предлагает простоту и удобство, позволяя <br/>
                        вам легко находить нужные функции. Наслаждайтесь <br/>
                        интуитивно понятным дизайном, который делает взаимодействие <br/>
                        с приложением быстрым и приятным, без лишних сложностей.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Optimization;