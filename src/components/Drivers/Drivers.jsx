import React from 'react';

import './Drivers.css'

const Drivers = () => {
    return (
        <section className="drivers">
            <div className="drivers__container">
                <h3 className="drivers__title">💾 Драйвера</h3>
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
                            Драйвер Lan необходим для обеспечения корректной работы сетевого адаптера компьютера.
                        </li>
                        <li className="drivers__item">
                            Chipset устанавливать для поколений процессоров Ryzen 7, intel 13 и выше
                        </li>
                        <li className="drivers__item">
                            Sound (Если сломался звук, а также если нужно более чёткое звучание)
                        </li>
                        <li className="drivers__item">
                            GPU (Устанавливать свежую версию драйвера, совместимую с вашей видеокартой)
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Drivers;