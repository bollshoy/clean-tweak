import React from 'react';
import Header from "@/components/Header/Header.jsx";
import LicenseAgreement
	from "@/components/LicenseAgreement/LicenseAgreement.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const Agreement = () => {
	return (
			<>
				<Header/>
				<LicenseAgreement/>
				{/*<Footer/>*/}
			</>
	);
};

export default Agreement;