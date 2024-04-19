import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";
import upload from "../../assets/AdminPanel/upload.png";
import qualification from "../../assets/AdminPanel/qualification.png";
import plus from "../../assets/AdminPanel/plus.png";
import cross from "../../assets/AdminPanel/cross.png";
import addring from "../../assets/AdminPanel/addring.png";

function AddGroup() {
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
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Training Partner</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
							<div className="flex items-center bg-[#EFF6FD] px-4 border border-[#ABB2BD] rounded-full h-10">
								<img src={addring} alt="" />
								<span>Add</span>
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Training Center</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
							<div className="flex items-center bg-[#EFF6FD] px-4 border border-[#ABB2BD] rounded-full h-10">
								<img src={addring} alt="" />
								<span>Add</span>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Sector</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Qualification Pack</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
							<div className="flex items-center bg-[#EFF6FD] px-4 border border-[#ABB2BD] rounded-full h-10">
								<img src={addring} alt="" />
								<span>Add</span>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>QP Code</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Level</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>SPOC</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Contact No.</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Email of SPOC</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Assign Assessor</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Scheme Type</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Scheme Name</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Sub Scheme</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Date of Assessment</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Actual Date of Assessment</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Center ID</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Batch Name</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2">
									<img src={sector} alt="" className="h-5" />
									<span>Address</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex flex-col  gap-4">
							<span className="font-medium">
								Welcome Message For Candidate
							</span>
							<div className="h-56 w-96 flex items-center justify-between px-4 gap-2 border bg-[#F3F7FF] rounded-xl">
								<div className="flex justify-between gap-2"></div>
							</div>
						</div>
						<div className="w-1/2 flex flex-col  gap-4">
							<span className="font-medium">
								Welcome Message For Assessor
							</span>
							<div className="h-56 w-96 flex items-center justify-between px-4 gap-2 border bg-[#F3F7FF] rounded-xl">
								<div className="flex justify-between gap-2"></div>
							</div>
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

export default AddGroup;
