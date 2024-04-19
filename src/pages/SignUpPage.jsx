import React from "react";
import SignUp from "../components/SignUp";
import AboutPareekshn from "../components/AboutPareekshn";
import ForgetPassword from "../components/ForgetPassword";
import ForgetUsername from "../components/ForgetUsername";
import CorporateSignUp from "../components/Hackathon/CorporateSignUp";

function SignUpPage() {
	return (
		<div className="flex flex-col lg:flex-row  min-h-screen items-center font-custom">
			{/* <ForgetPassword /> */}
			{/* <ForgetUsername /> */}
			{/* <CorporateSignUp /> */}
			<SignUp />
			<AboutPareekshn />
		</div>
	);
}

export default SignUpPage;
