import React from 'react';
import deviceManagerImg from '@/assets/images/deviceManagesr.png';
import deviceManager from "@/data/deviceManager.js";

import './DeviceManager.css';

const DeviceManager = () => {
    return (
        <section className="deviceManager">
            <div className="deviceManager__container">
                <h4 className="deviceManager__title">💻Диспетчер устройств</h4>
                <span className="deviceManager__subtitle">
                    Win + R ➡️ devmgmt.msc<br/>
                    Далее следуйте инструкциям и отключайте только то, что написано ниже!
                </span>
                <div className="deviceManager__img">
                    <img src={deviceManagerImg} alt=""/>
                </div>
                <div className="deviceManager__content">
                    <span className="deviceManager__content--title">Отключаем:</span>
                    <ul className="deviceManager__list">
                        {deviceManager.map((item) => (
                            <li className="deviceManager__item" key={item.id}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DeviceManager;