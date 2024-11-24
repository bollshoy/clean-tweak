import React from 'react';

import './Drivers.css'

const Drivers = () => {
    return (
        <section className="drivers">
            <div className="drivers__container">
                <h3 className="drivers__title">💾Драйвера</h3>
                <p className="drivers__text">
                    Драйверы играют ключевую роль в стабильной работе <br/>
                    Windows, позволяя ОС взаимодействовать с оборудованием, таким <br/>
                    как видеокарты и сетевые адаптеры. Обновленные драйверы можно скачать с <br/>
                    официального сайта производителя материнской платы или ноутбука.
                </p>
                <div className="drivers__content">
                    <span className="drivers__content--title">
                        Какие стоит устанавливать драйвера?
                    </span>
                    <ol className="drivers__list">
                        <li className="drivers__item">
                            Ethernet
                        </li>
                        <li className="drivers__item">
                            ChipSet
                        </li>
                        <li className="drivers__item">
                            Sound (Если нету звука, а так же если у вас мощное железо)
                        </li>
                        <li className="drivers__item">
                            GPU (Последнюю версию независимо от того, что у
                            вас <span>NVIDIA</span> или <span>AMD
                        </span>)
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Drivers;