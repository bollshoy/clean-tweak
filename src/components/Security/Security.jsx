import React, { useEffect, useRef, useState } from "react";
import security from "@/data/security.js";
import gsap from "gsap";
import "./Security.css";

const Security = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const subtitleFirst = useRef(null);
  const subtitleSecond = useRef(null);
  const title = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline();

      tl.set(
        [
          subtitleFirst.current,
          subtitleSecond.current,
          title.current,
          itemsRef.current,
        ],
        {
          visibility: "visible",
        }
      );

      tl.fromTo(
        subtitleFirst.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .to({}, { duration: 0.1 })
        .fromTo(
          subtitleSecond.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        )
        .to({}, { duration: 0.1 })
        .fromTo(
          title.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
        );

      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.4,
          stagger: 0.3,
          ease: "back.out(1.7)",
          delay: 1.5,
        }
      );
    }
  }, [isVisible]);

  return (
    <section className="security" ref={sectionRef}>
      <div className="security__container container">
        <div className="security__title-content">
          <span
            className="security__subtitle"
            ref={subtitleFirst}
            style={{ visibility: "hidden" }}
          >
           Низкий FPS?
          </span>
          <span
            className="security__subtitle"
            ref={subtitleSecond}
            style={{ visibility: "hidden" }}
          >
            Частые статтеры?
          </span>
          <h3
            className="security__title"
            ref={title}
            style={{ visibility: "hidden" }}
          >
            Мы исправим.
          </h3>
        </div>
        <p className="security__text">
          Мы настроем ваш компьютер, чтобы <br />
          вы влюбились в игры заново!
        </p>
        <div className="security__content">
          {security.map((item, index) => (
            <div
              key={item.id}
              className="security__wrapper"
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ visibility: "hidden" }}
            >
              <span className="security__number">{item.number}</span>
              <div className="security__item">
                <span className="security__content-title">{item.title}</span>
                <p className="security__content-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
