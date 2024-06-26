import React from "react";
import tablet from "/Tablet.png";
import arrowLeft from "/arrowLeft.png";

function LoginWithOTP() {
	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-96 px-4 py-2 ">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">
						Login With
					</span>
					<span className="font-semibold text-[#222222]">OTP</span>
				</div>
			</div>
			<div className="border border-black rounded-md px-2 py-1 my-8 h-12 flex items-center">
				<div className="flex items-center gap-2 text-[#1C4481] w-full">
					<img src={tablet} alt="" className="h-5 w-5" />
					<input
						type="number"
						placeholder="Enter Mobile Number"
						className="placeholder:text-black px-2 w-full outline-none no-spin"
					/>
				</div>
			</div>
			<button className="bg-[#1C4481] text-white w-full h-10 rounded-3xl">
				Continue
			</button>
		</div>
	);
}

export default LoginWithOTP;
