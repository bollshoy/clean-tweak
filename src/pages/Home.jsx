import React, {useEffect} from 'react';

import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Advantages from "@/components/Advantages/Advantages.jsx";
import Recleaner from "@/components/Recleaner/Recleaner.jsx";
import Security from "@/components/Security/Security.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Form from '@/components/Form/Form.jsx';
import Clients from "@/components/Clients/Clients.jsx";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
			<>
				<Header/>
				<main>
					<Hero id="hero"/>
					<Testimonial id="testimonial"/>
					<Security id="security"/>
					<Clients/>
					<Advantages id="advantages"/>
					<section id="recleaner">
						<Recleaner/>
					</section>
					<section id="form">
						<Form/>
					</section>
				</main>
				<Footer/>
			</>
	);
};

export default Home;
