import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";
import upload from "../../assets/AdminPanel/upload.png";
import qualification from "../../assets/AdminPanel/qualification.png";
import plus from "../../assets/AdminPanel/plus.png";
import cross from "../../assets/AdminPanel/cross.png";
import addring from "../../assets/AdminPanel/addring.png";

function AddAssessor() {
	return (
		<div className="bg-[#F3F7FF] flex items-center">
			<div className="flex flex-col gap-8 shadow-allBorder w-full bg-white my-4 mx-2 rounded-3xl p-8">
				<div className="bg-[#1C4481] flex gap-2 p-2 w-1/5 text-white rounded-full">
					<img src={upload} alt="" />
					<span>Upload From Excel</span>
				</div>
				<div className="border border-t"></div>
				<div className="flex flex-col gap-8">
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Assessor Name</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Assessor ID</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>State</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>District</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Employement Type</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Mobile No.</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Email</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Aadhar</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Start Date</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Password</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Alternate ID Number</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Username</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex flex-col w-1/2 gap-4 my-8">
						<span className="text-[#1C4481] font-medium">
							Upload Picture
						</span>
						<div className="flex items-center gap-6">
							<div className="bg-[#1C4481] text-white p-2 rounded-lg px-4">
								<span>Choose File</span>
							</div>
							<span className="text-green-400">
								No File Choosen
							</span>
						</div>
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
		</div>
	);
}

export default AddAssessor;
