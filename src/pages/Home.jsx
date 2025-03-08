import React, { useState, useEffect } from "react";
import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Advantages from "@/components/Advantages/Advantages.jsx";
import Recleaner from "@/components/Recleaner/Recleaner.jsx";
import Security from "@/components/Security/Security.jsx";
import Clients from "@/components/Clients/Clients.jsx";
import Start from "@/components/Start/Start.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Form from "@/components/Form/Form.jsx";

const Home = ({ loading }) => {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDisableAnimations(window.innerWidth <= 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main>
      <Start loading={loading} id="start" />
      <Hero disableAnimations={disableAnimations} />
      <Testimonial disableAnimations={disableAnimations} id="testimonial" />
      <Security disableAnimations={disableAnimations} id="security" />
      <Clients disableAnimations={disableAnimations} />
      <Advantages disableAnimations={disableAnimations} id="advantages" />
      <section id="recleaner">
        <Recleaner />
      </section>
      <section id="form">
        <Form disableAnimations={disableAnimations} />
      </section>
    </main>
  );
};

export default Home;
