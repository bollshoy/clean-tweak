import React from 'react';
import update from '@/assets/images/updateWindows.png'

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
                    <a href="https://disk.yandex.ru/d/rtsL2vWzsjsCKw" target={'_blank'}
                       className="windows__download--link">
                       <span>
                            Windows 11
                       </span>
                    </a>
                </div>
                <div className="content__update">
                        <span className="content__title">
                            🌀Обновление
                        </span>
                    <p className="content__text">
                        Если вы отключите автоматическое обновление, Windows не сможет загружать и
                        устанавливать <br/>
                        новые обновления и не сможет принудительно выполнить обновление через <span>X</span> дней. <br/>
                    </p>
                    <div className="windows__list">
                        <ol className={'content__list'}>
                            <li className="content__item">
                                Win+R ➡️ gpedit.msc
                            </li>
                            <li className="content__item">
                                Выберите <span>
                                    Компьютерная конфигурация ➡️
                                    Административные шаблоны ➡️
                                    Компоненты Windows ➡️
                                    Обновление Windows➡️
                                </span>
                            </li>
                            <li className="content__item">
                                Отыщете <span>Настроить автоматическое обновление(Configure Automatic Updates)</span>,
                                оно обычно расположено в правой части вашего окна.
                            </li>
                            <li className="content__item">
                                Выберите <span>Disabled/Отключить</span>.
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