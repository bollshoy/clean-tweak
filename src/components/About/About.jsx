import React, {useCallback, useState} from 'react';

import discord from '@/assets/icons/discord.svg';
import cloud from '@/assets/icons/cloud.svg';
import defender from '@/assets/icons/security.svg';
import upd from '@/assets/icons/update.svg';
import './About.css';

const About = () => {
    const [isDefenderChecked, setIsDefenderChecked] = useState(false);
    const [isUpdateChecked, setIsUpdateChecked] = useState(false);

    const handleDefenderToggle = useCallback(() => {
        setIsDefenderChecked(!isDefenderChecked);
        document.body.classList.toggle('is-active');
    }, [isDefenderChecked]);

    const handleUpdateToggle = useCallback(() => {
        setIsUpdateChecked(!isUpdateChecked);
        document.body.classList.toggle('is-active');
    }, [isUpdateChecked]);

    return (
        <section className="about">
            <div className="about__container">
                <div className="about__item item-1">
                    <div className="about__btn">
                        <div className="about__btn-title">
                            <img src={defender} alt="defender" className="about__btn-img"/>
                            <span className="about__title">Windows Defender</span>
                        </div>
                        <input
                            className="about__switch"
                            type="checkbox"
                            id="switch__defender"
                            checked={isDefenderChecked}
                            onChange={handleDefenderToggle}
                        />
                        <label htmlFor="switch__defender" className="switch__label">
                            <span className="switch__circle"></span>
                        </label>
                    </div>
                    <p className="about__text">
                        Не надо думать о твиках — все просто! Все нужные функции доступны по одному нажатию мыши. <br/>
                        С легкостью настраивайте параметры, получайте обновления и обеспечивайте безопасность — все это
                        в одном месте, без лишних усилий!
                    </p>

                    <div className="about__btn">
                        <div className="about__btn-title">
                            <img src={upd} alt="update" className="about__btn-img"/>
                            <span className="about__title">Windows Update</span>
                        </div>
                        <input
                            className="about__switch"
                            type="checkbox"
                            id="switch__update"
                            checked={isUpdateChecked}
                            onChange={handleUpdateToggle}
                        />
                        <label htmlFor="switch__update" className="switch__label">
                            <span className="switch__circle"></span>
                        </label>
                    </div>
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
