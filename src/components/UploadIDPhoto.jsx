import React from "react";
import arrowLeft from "/arrowLeft.png";
import upload from "/upload.png";
import idcard from "/idcard.png";

function UploadIDPhoto() {
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
			<div className="flex flex-col justify-between text-sm items-center gap-6 my-8">
				<span className="font-bold">Upload/Capture ID Card</span>
				<img src={idcard} alt="" className="h-28" />
				<span className="text-center text-[12px] text-[#6C6C6C]">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry.
				</span>
				<button className="bg-[#1C4481] text-white w-1/2 h-8 rounded-3xl">
					Upload
				</button>
			</div>
		</div>
	);
}

export default UploadIDPhoto;
