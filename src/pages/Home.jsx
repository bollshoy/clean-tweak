import React from "react";
import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Advantages from "@/components/Advantages/Advantages.jsx";
import Recleaner from "@/components/Recleaner/Recleaner.jsx";
import Security from "@/components/Security/Security.jsx";
import Clients from "@/components/Clients/Clients.jsx";
import Start from "@/components/Start/Start.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Form from "@/components/Form/Form.jsx";

const Home = ({ loading }) => {
  return (
    <main>
      <Start loading={loading} id="start" />
      <Hero />
      <Testimonial id="testimonial" />
      <Security id="security" />
      <Clients />
      <Advantages id="advantages" />
      <section id="recleaner">
        <Recleaner />
      </section>
      <section id="form">
        <Form />
      </section>
    </main>
  );
};

export default Home;
