import React, {useCallback, useState} from 'react';

import discord from '@/assets/icons/discord.svg';
import cloud from '@/assets/icons/cloud.svg';

import './About.css'

const About = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = useCallback(() => {
        setIsChecked(!isChecked);
        document.body.classList.toggle('is-active');
    })

    return (
        <section className="about">
            <div className="about__container">
                <div className="about__item item-1">
                    <div className="about__btn">
                        <span className="about__title">Windows DEFENDER</span>
                        <input
                            className="about__switch"
                            type="checkbox"
                            id="switch__checkbox"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        <label htmlFor="switch__checkbox" className="switch__label">
                            <span className="switch__circle"></span>
                        </label>
                    </div>
                    <p className="about__text">
                        Не надо думать о твиках — все просто!<br/> Все нужные функции доступны по одному нажатию мыши.
                    </p>
                </div>
                <div className="about__item item-2">
                    <div className="about__title-content">
                        <span className="about__title">БЭКАПЫ</span>
                        <img src={cloud} alt="cloud" className="about__img"/>
                    </div>
                    <p className="about__text">
                        В программе встроена система <br/>
                        бэкапов, позволяющая легко <br/>
                        восстанавливать параметры и исправлять <br/>
                        ошибки в случае непредвиденных ситуаций.
                    </p>
                </div>
                <div className="about__item item-3">
                    <span className="about__title">Стало интересно?</span>
                    <p className="about__text">Тогда мы ждем тебя<br/> на нашем Дискорд сервере!</p>
                    <div className="about__btn">
                        <a href="https://discord.gg/5XUuaxHrRd" className="about__link">
                            <p className="about__text">Присоединяйся</p>
                            <img src={discord} alt="discord" className="about__img"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;