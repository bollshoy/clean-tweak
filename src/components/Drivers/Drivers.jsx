import React from 'react';

import './Drivers.css'

const Drivers = () => {
    return (
        <section className="drivers">
            <div className="drivers__container">
                <h3 className="drivers__title">💾Драйвера</h3>
                <p className="drivers__text">
                    Важность драйверов в операционной системе Windows играет важную роль для стабильной и
                    эффективной <br/>
                    работы компьютера. Драйверы - это программное обеспечение, которое позволяет операционной
                    системе <br/>
                    взаимодействовать с компьютерным оборудованием, таким как видеокарты, звуковые карты, сетевые <br/>
                    адаптеры и другие устройства.
                </p>
                <p className="drivers__text">
                    Производитель оборудования предлагает обновленные драйверы на своем официальном сайте. Вы
                    можете <br/>
                    зайти на оф. сайт вашего производителя материнской платы, ноутбука и тд, и загрузить последние
                    версии драйверов.
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
                        </span>.)
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Drivers;