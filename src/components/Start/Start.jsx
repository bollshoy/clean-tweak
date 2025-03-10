import React, {useState, useEffect} from "react";
import SplitText from "@/Animations/SplitText/SplitText.jsx";
import backgroundVideo from "@/assets/video/gamingBg.mp4";
import mouseScroll from '@/assets/video/mouseScrollAnimation.webm';
import "./Start.css";

const Start = ({loading}) => {
	const [isVisible, setIsVisible] = useState(false);
	
	const scrollDown = () => {
		window.scrollBy({
			top: 1000,
			behavior: 'smooth'
		});
	};
	
	useEffect(() => {
		if (!loading) {
			setTimeout(() => setIsVisible(true), 300);
		}
	}, [loading]);
	
	return (
			<>
				<div className="start__background">
					<video autoPlay muted loop className="start__video">
						<source src={backgroundVideo} type="video/mp4"/>
					</video>
				</div>
				<section
						className={`start ${isVisible ? "animate" : "hidden"}`}
						id="start"
				>
					<div className="start__container">
						<span className="start__subtitle">Clean Tweaking</span>
						<h1 className="start__title">
							Prepare. Go.
							<span>
              {isVisible && (
		              <SplitText
				              text=" Optimize."
				              delay={150}
				              animationFrom={{
					              opacity: 0,
					              transform: "translate3d(0,50px,0)",
				              }}
				              animationTo={{
					              opacity: 1,
					              transform: "translate3d(0,0,0)",
				              }}
				              easing="easeOutCubic"
				              threshold={0.2}
				              rootMargin="-50px"
		              />
              )}
            </span>
						</h1>
						<p className="start__text">
							Пристегните ремни, сейчас вы начнете влюбляться в игры заново!
						</p>
					</div>
					<div className="mouse" onClick={scrollDown}>
						<video autoPlay loop muted playsInline className="mouse__video">
							<source src={mouseScroll} type="video/webm" />
						</video>
					</div>
				</section>
			</>
	);
};

export default Start;
