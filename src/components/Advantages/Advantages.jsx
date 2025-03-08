import React, { useEffect, useRef, useState } from "react";
import BlurText from "@/Animations/BlurText/BlurText";
import advantages from "@/data/advantages.js";
import gsap from "gsap";
import "./Advantages.css";

const Advantages = () => {
  const itemsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && itemsRef.current.length > 0) {
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        const delay = index * 0.15;

        gsap.fromTo(
          el,
          { opacity: 0, x: -100, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay,
            ease: "back.out(2)",
          }
        );
      });
    }
  }, [isVisible]);

  return (
    <section className="advantages" ref={sectionRef}>
      <h6 className="advantages__title">
        <BlurText
          text="Конфиденциальность и Безопасность"
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text"
        />
      </h6>

      <div className="advantages__container container">
        {advantages.map((item, index) => (
          <div
            className="advantages__card"
            key={item.id}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ opacity: 0 }}
          >
            <img src={item.src} alt={item.title} className="advantages__icon" />
            <span className="advantages__content-title">{item.title}</span>
            <p className="advantages__text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
