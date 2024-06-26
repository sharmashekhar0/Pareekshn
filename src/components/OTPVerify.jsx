import React from "react";
import arrowLeft from "/arrowLeft.png";

function OTPVerify() {
	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">
						Candidate
					</span>
					<span className="font-semibold text-[#555555]">Panel</span>
				</div>
			</div>
			<div className="flex flex-col mt-14 items-center gap-6">
				<span className="text-sm font-medium">
					Enter 4 digit code sent to your mobile phone
				</span>
				<div className="flex gap-4">
					<div className="w-12 h-12 flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none enabled:appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
							inputMode="numeric"
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
						/>
					</div>
				</div>
				<button className="bg-[#1C4481] rounded-3xl w-full h-10 font-medium text-white">
					Submit
				</button>
				<span className="text-sm text-[#50B4ED]">Resend(26)</span>
			</div>
		</div>
	);
}

export default OTPVerify;
