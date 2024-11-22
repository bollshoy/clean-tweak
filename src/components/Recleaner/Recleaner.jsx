import React, {useRef} from 'react';
import recleaner from "@/data/recleaner.js";
import logo from '@/assets/images/recleanerLogo.jpg';
import './Recleaner.css';

const Recleaner = () => {
    const downloadUrl = import.meta.env.VITE_DOWNLOAD_LINK;
    const hiddenLinkRef = useRef(null);

    const handleDownload = () => {
        hiddenLinkRef.current.click();
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
                            Программа абсолютно бесплатная, скачать может любой желающий.
                        </p>
                        <button className="recleaner__content--btn" onClick={handleDownload}>
                            скачать
                        </button>
                        <a
                            href={downloadUrl}
                            download
                            ref={hiddenLinkRef}
                            style={{display: 'none'}}
                        >
                            Скрытая ссылка
                        </a>
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
