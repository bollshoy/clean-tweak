import React from "react";
import icons from "@/data/icons.js";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__container container">
          <div className="about__title--content">
            <h2 className="about__title">
              👋Привет, тут ты найдешь полезные гайды
            </h2>
            <div className="about__item-contact">
              {icons.map((item) => (
                <div key={item.id} className="about__item--link">
                  <a href={item.href} className="about__link">
                    <img src={item.src} alt="icon social" className="item__img" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="about__content">
            <div className="about__item">
              <span className="about__item--title">❓Что здесь будет</span>
              <p className="about__item--text">
                Здесь вы найдете гайды для вашего ПК, если вы будете
                придерживаться наших рекомендаций, то результат мы гарантируем.
              </p>
            </div>
            <div className="about__item">
              <span className="about__item--title">
                💁Кому подойдут эти советы?
              </span>
              <p className="about__item--text">
                Эти полезные советы подойдут абсолютно всем пользователям
                операционной системы Windows, независимо от их уровня опыта.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="about__line"></div>
    </>
  );
};

export default About;
