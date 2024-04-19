import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";
import upload from "../../assets/AdminPanel/upload.png";
import qualification from "../../assets/AdminPanel/qualification.png";
import plus from "../../assets/AdminPanel/plus.png";
import cross from "../../assets/AdminPanel/cross.png";

function AddNosPack() {
	return (
		<div className="flex flex-col gap-8 shadow-allBorder my-8 mx-2 rounded-3xl p-8">
			<div className="bg-[#1C4481] flex gap-2 p-2 w-1/5 text-white rounded-full">
				<img src={upload} alt="" />
				<span>Upload From Excel</span>
			</div>
			<div className="border border-t"></div>
			<div className="flex items-center w-full gap-6">
				<div className="w-11/12 text-[#1C4481]">
					<div className="bg-[#F3F7FF] p-4 rounded-md flex justify-between text-sm w-full gap-4">
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2">
								<img src={sector} alt="" className="h-5" />
								<span>Sector</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 items-center">
								<img
									src={qualification}
									alt=""
									className="h-5"
								/>
								<span>Qualification Code</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 items-center">
								<img
									src={qualification}
									alt=""
									className="h-5"
								/>
								<span>Qualification Pack name</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
					</div>
					<div className="bg-[#F3F7FF] p-4 rounded-md flex justify-between text-sm w-full gap-4">
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2">
								<img src={sector} alt="" className="h-5" />
								<span>Sector</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 items-center">
								<img
									src={qualification}
									alt=""
									className="h-5"
								/>
								<span>Qualification Code</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
						<div className="h-16 w-72 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 items-center">
								<img
									src={qualification}
									alt=""
									className="h-5"
								/>
								<span>Qualification Pack name</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
					</div>
				</div>
				<img src={cross} alt="" className="self-end py-8" />
			</div>
			<div className="flex justify-end pr-24">
				<div className="flex items-center justify-center bg-[#1C4481] w-28 h-10 gap-2 text-white rounded-full">
					<img src={plus} alt="" />
					<span>Add</span>
				</div>
			</div>
			<div className="flex gap-10">
				<div className="h-14 w-1/6 text-white flex items-center justify-center bg-[#1C4481] rounded-full">
					<span>Submit</span>
				</div>
				<div className="h-14 w-1/6 text-[#E93A3A] flex items-center justify-center border-2 border-[#E93A3A] rounded-full">
					<span>Cancel</span>
				</div>
			</div>
		</div>
	);
}

export default AddNosPack;
