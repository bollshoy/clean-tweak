import React from 'react';
import update from '@/assets/images/updateWindows.jpg'
import download from '@/assets/icons/download.png';
import updLogo from '@/assets/icons/updateLogo.svg';
import './Windows.css';

const Windows = () => {
    return (
        <section className="windows">
            <div className="windows__container container">
                <h3 className="windows__title">
                    Установите чистую Windows
                </h3>
                <p className="windows__text">
                    Установка чистой ОС - это самый главный шаг в нашей настройке. <br/>
                    Рекомендуется ставить Windows 11.
                </p>
                <a className="windows__download windows__download--link" href="https://disk.yandex.ru/d/rtsL2vWzsjsCKw" target={'_blank'}>
                    <img src={download} alt="logo" className="windows__download--img"/>
                    <span>Windows 11</span>
                </a>
                <div className="content__update">
                    <div className="content__title--content">
                        <img src={updLogo} alt="logo" className="content__title--img"/>
                        <span className="content__title">Обновление</span>
                    </div>
                    <p className="content__text">
                        После установки Windows мы рекомендуем установить последние Обновления <br/>
                        Windows, чтобы избежать проблем с компонентами.
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
                                Скачайте и установите все обновления, а после перезагрузитесь
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