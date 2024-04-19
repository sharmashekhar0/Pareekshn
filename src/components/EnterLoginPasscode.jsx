import React from "react";
import arrowLeft from "/arrowLeft.png";
import { TbPassword } from "react-icons/tb";

function EnterLoginPasscode() {
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
			<div className="mb-4 mt-14 flex justify-between items-center w-full rounded border h-12">
				<TbPassword className="border rounded w-1/12 border-[#435DBC] mx-2 text-[#435DBC]" />
				<input
					type="text"
					placeholder="Enter Login Code"
					className="w-full outline-none border-none placeholder:text-[#435DBC]"
				/>
			</div>
			<button className="w-full h-12 bg-[#1C4481] text-white rounded-3xl">
				Login
			</button>
		</div>
	);
}

export default EnterLoginPasscode;
