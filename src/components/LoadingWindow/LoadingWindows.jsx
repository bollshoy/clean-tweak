import React from 'react';
import loadingVideo from "@/assets/video/loading.mp4";
import './LoadingWindows.css';

const LoadingWindows = ({fadeOut, onClick}) => {
	return (
			<>
				<div className={`loading ${fadeOut ? "fade-out" : ""}`}
				     onClick={onClick}>
					<video className="preloader__video" autoPlay muted playsInline>
						<source src={loadingVideo} type="video/mp4"/>
					</video>
				</div>
			</>
	);
};

export default LoadingWindows;
