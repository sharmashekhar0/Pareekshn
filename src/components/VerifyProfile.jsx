import React from "react";
import arrowLeft from "/arrowLeft.png";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import user from "/User.png";
import tablet from "/Tablet.png";
import message from "/message.png";
import gender from "/gender.png";
import date from "/date.png";
import userProfile from "/userProfile.png";

import { FaAngleDown } from "react-icons/fa6";

function VerifyProfile() {
	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-fit px-4 py-2 ">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">Verify</span>
					<span className="font-semibold text-[#222222]">
						Profile
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 my-2 text-sm px-2">
				<div className="border border-[#000000] rounded-md px-2 py-1">
					<div className="flex items-center gap-2 text-[#1C4481]">
						<img src={userProfile} alt="" className="h-5 w-5" />
						<span>Candidate Name</span>
					</div>
					<input
						className="outline-none px-7 placeholder:text-black"
						placeholder="Kuldeep"
					/>
				</div>
				<div className="border border-black rounded-md px-2 py-1">
					<div className="flex  items-center gap-2 text-[#1C4481]">
						<img src={gender} alt="" className="h-5 w-5" />
						<span>Gender</span>
					</div>
					<div className="flex items-center justify-between">
						<input
							className="outline-none px-7 placeholder:text-black"
							placeholder="Male"
						/>
						<FaAngleDown />
					</div>
				</div>
				<div className="border border-black rounded-md px-2 py-1">
					<div className="flex  items-center gap-2 text-[#1C4481]">
						<img src={date} alt="" className="h-5 w-5" />
						<span>Date of Birth*</span>
					</div>
					<div className="flex items-center justify-between">
						<input
							className="outline-none px-7 placeholder:text-black"
							placeholder="17/08/2001"
						/>
						<FaRegCalendar />
					</div>
				</div>
				<div className="border border-black rounded-md px-2 py-1">
					<div className="flex  items-center gap-2 text-[#1C4481]">
						<img src={message} alt="" className="h-5 w-5" />
						<span>Email*</span>
					</div>
					<input
						className="outline-none px-7 placeholder:text-black"
						placeholder="Kuldeep@gmail.com"
					/>
				</div>
				<div className="border border-black rounded-md px-2 py-1">
					<div className="flex  items-center gap-2 text-[#1C4481]">
						<img src={tablet} alt="" className="h-5 w-5" />
						<span>Mobile Number*</span>
					</div>
					<input
						className="outline-none px-7 placeholder:text-black"
						placeholder="6321145888"
					/>
				</div>
				<div className="border border-black rounded-md px-2 py-1">
					<div className="flex  items-center gap-2 text-[#1C4481]">
						<img src={user} alt="" className="h-4 w-5" />
						<span>Aadhar Number*</span>
					</div>
					<input
						className="outline-none px-7 placeholder:text-black"
						placeholder="654123658987"
					/>
					<span className="px-7"></span>
				</div>
			</div>
		</div>
	);
}

export default VerifyProfile;
