import React from 'react';

import discord from '@/assets/icons/discord.svg';

import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <h6 className="contact__title">Мы ждём тебя!</h6>
                <div className="about__btn">
                    <a href="https://discord.gg/5XUuaxHrRd" className="about__link">
                        <p className="about__text">Присоединяйся</p>
                        <img src={discord} alt="discord" className="about__img"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;