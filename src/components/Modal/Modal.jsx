import React from 'react';
import icons from "@/data/icons.js";
import './Modal.css';

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
                <span className="modal__title">Способ связи мессенджеры</span>
                <div className="modal__content">
                    {icons.map((item) => (
                        <div key={item.src} className="modal__item">
                            <a href={item.href} className="modal__link">
                                <img src={item.src} alt={item.title} className="modal__icon"/>
                            </a>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                <button onClick={() => setActive(false)}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
