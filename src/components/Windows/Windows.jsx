import React from 'react';
import update from '@/assets/images/updateWindows.jpg'
import winLogo from '@/assets/images/winLogo.png';
import './Windows.css';

const Windows = () => {
    return (
        <section className="windows">
            <div className="windows__container">
                <h3 className="windows__title">
                    Установите чистую Windows
                </h3>
                <p className="windows__text">
                    Установка чистой ОС - это самый главный шаг в нашей настройке. <br/>
                    Рекомендуется ставить Windows 11.
                </p>
                <div className="windows__download">
                    <img src={winLogo} alt="logo" className="windows__download--img"/>
                    <a href="https://disk.yandex.ru/d/rtsL2vWzsjsCKw" target={'_blank'}
                       className="windows__download--link">
                        Windows 11
                    </a>
                </div>
                <div className="content__update">
                        <span className="content__title">
                            🌀Обновление
                        </span>
                    <p className="content__text">
                        Мы рекомендуем после установки Windows первым делом установить все обновления.
                    </p>
                    <div className="windows__list">
                        <ol className={'content__list'}>
                            <li className="content__item">
                                Пуск
                            </li>
                            <li className="content__item">
                                Параметры
                            </li>
                            <li className="content__item">
                                Центр обновления Windows
                            </li>
                            <li className="content__item">
                                Скачайте и установите все обновление, а после перезагрузитесь
                            </li>
                        </ol>
                    </div>
                    <div className="content__img">
                        <img src={update} alt="update" className="content__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Windows;