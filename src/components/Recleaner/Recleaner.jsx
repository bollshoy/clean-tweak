import React, {useRef} from 'react';
import recleaner from "@/data/recleaner.js";

import logo from '@/assets/images/recleanerLogo.jpg'

import './Recleaner.css'

const Recleaner = () => {
    const buttonRef = useRef(null);

    const handleDownload = () => {
        const fileUrl = import.meta.env.VITE_DOWNLOAD_LINK;
        const link = document.createElement('a');
        link.href = fileUrl;
        // Замена на таргет_бланк для проверки
        // link.setAttribute('download', 'RECLEANER.exe');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };
    return (
        <section className="recleaner">
            <div className="recleaner__container container">
                <h6 className="recleaner__title">
                    Наши проекты - <span>OPEN BETA!</span>
                </h6>
                <div className="recleaner__content">
                    <div className="recleaner__content-content">
                        <span className="recleaner__content--title">Recleaner</span>
                        <p className="recleaner__content--text">
                            Попробуйте нашу утилиту, для настройки системы.<br/>
                            С обширным функционалом, при этом не ломая систему.<br/>
                            Программа обсолютно бесплатная, скачать может любой желающий.
                        </p>
                        <button className="recleaner__content--btn" onClick={handleDownload} ref={buttonRef}>
                            скачать
                        </button>
                    </div>
                    <div className="recleaner__content-img">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="recleaner__social">
                    {recleaner.map((item) => (
                        <div className="recleaner__item" key={item.id}>
                            <a href={item.href} target={'_blank'} className="recleaner__item--link">
                                <img src={item.src} alt="" className="recleaner__item--img"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recleaner;