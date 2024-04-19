import React from "react";
import tablet from "/Tablet.png";
import arrowLeft from "/arrowLeft.png";
import leftBg from "/leftBg.jpg";
import userProfile from "/userProfile.png";

function ForgetUsername() {
	return (
		<div className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center">
			<div className="absolute inset-0 z-[-1] overflow-hidden min-h-screen">
				<img
					src={leftBg}
					alt=""
					className="w-full h-full absolute inset-0 object-fill"
				/>
			</div>
			<div className="w-1/2 bg-white rounded-3xl right-64 absolute border h-96 px-4 py-2 ">
				<div className="flex justify-between items-center">
					<img
						src={arrowLeft}
						alt=""
						className="bg-[#1C4481] w-6 h-6 rounded-full"
					/>
					<div className="flex flex-col items-end">
						<span className="font-semibold text-[#AFAFAF]">
							Forget
						</span>
						<span className="font-semibold text-[#222222]">
							User Name
						</span>
					</div>
				</div>
				<div className="border border-[#000000] rounded-md px-2 py-1 my-8">
					<div className="flex items-center h-12 gap-2 text-[#1C4481]">
						<img src={tablet} alt="" className="h-5 w-5" />
						<span>Enter Mobile Number</span>
					</div>
				</div>
				<button className="bg-[#1C4481] text-white font-medium h-12 w-full rounded-full">
					Continue
				</button>
				<button className="bg-white text-[#E88686] border-2 border-[#E88686] my-4 font-medium h-12 w-full rounded-full">
					Cancel
				</button>
			</div>
		</div>
	);
}

export default ForgetUsername;
