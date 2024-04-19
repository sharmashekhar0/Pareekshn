import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";
import upload from "../../assets/AdminPanel/upload.png";
import qualification from "../../assets/AdminPanel/qualification.png";
import plus from "../../assets/AdminPanel/plus.png";
import cross from "../../assets/AdminPanel/cross.png";
import addring from "../../assets/AdminPanel/addring.png";
import arrowleft from "../../assets/AdminPanel/arrowleft.png";

function AddExam() {
	return (
		<div className="bg-[#F3F7FF] flex items-center">
			<div className="flex flex-col relative gap-8 shadow-allBorder min-h-[1400px] w-full bg-white my-4 mx-2 rounded-3xl p-8">
				<div className="bg-[#1C4481] flex gap-2 p-1 w-9 text-white rounded-full">
					<img src={arrowleft} alt="" className="h-7 w-7" />
				</div>
				<div className="flex-col ">
					<div className="relative h-fit flex justify-between px-16 w-2/3">
						<div className="flex flex-col items-center gap-1 z-[2]">
							<div className="h-20 w-20 bg-[#347DEE] flex-col font-semibold text-lg text-white rounded-full flex items-center justify-center">
								<span>Step</span>
								<span>1</span>
							</div>
							<div className="flex-col text-sm rounded-full flex items-center justify-center">
								<span className="text-[#1C4481] font-medium">
									Basic Description
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center gap-1 z-[2]">
							<div className="h-20 w-20 bg-[#347DEE] flex-col font-semibold text-lg text-white rounded-full flex items-center justify-center">
								<span>Step</span>
								<span>2</span>
							</div>
							<div className="flex-col text-sm rounded-full flex items-center justify-center">
								<span className="text-[#1C4481] font-medium">
									Select Question
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center gap-1 z-[2]">
							<div className="h-20 w-20 bg-[#347DEE] flex-col font-semibold text-lg text-white rounded-full flex items-center justify-center">
								<span>Step</span>
								<span>3</span>
							</div>
							<div className="flex-col text-sm rounded-full flex items-center justify-center">
								<span className="text-[#1C4481] font-medium">
									Review
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center gap-1 z-[2]">
							<div className="h-20 w-20 bg-[#347DEE] flex-col font-semibold text-lg text-white rounded-full flex items-center justify-center">
								<span>Step</span>
								<span>4</span>
							</div>
							<div className="flex-col text-sm rounded-full flex items-center justify-center">
								<span className="text-[#1C4481] font-medium">
									Final
								</span>
							</div>
						</div>
						<div className="h-3 w-full bg-[#1C4481] rounded-full top-1/2 left-0 -translate-y-full z-[1] absolute"></div>
					</div>
				</div>
				<div className="border border-t"></div>
				<div className="flex flex-col gap-8 ">
					<div className="flex w-full">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Exam Name</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Select Batch</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Assessor</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Qualification Package</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Question Bank</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Exam Module</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Start Date</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Start Time</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Reporting Time</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-4 w-5/12">
						<span className="font-semibold text-[#1C4481] text-xl">
							NOS
						</span>
						<div className="w-full bg-[#E7F0FF] shadow-allBorder h-72 border  rounded-md"></div>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="border-[#1C4481] border-2 rounded-full h-10 w-28"></div>
						<div className="border-[#1C4481] border-2 rounded-full h-10 w-28"></div>
						<div className="border-[#1C4481] border-2 rounded-full h-10 w-28"></div>
						<div className="border-[#1C4481] border-2 rounded-full h-10 w-28"></div>
					</div>
					<div className="flex flex-col gap-4 w-5/12">
						<span className="font-semibold text-[#1C4481] text-xl">
							Selected NOS
						</span>
						<div className="w-full bg-[#E7F0FF] shadow-allBorder h-72 border  rounded-md"></div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="w-1/2 flex items-center gap-4">
						<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 text-[#1C4481]">
								<img src={sector} alt="" className="h-5" />
								<span>Question Fetching</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
					</div>
					<div className="w-1/2 flex items-center gap-4">
						<div className="h-16 w-11/12 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
							<div className="flex justify-between gap-2 text-[#1C4481]">
								<img src={sector} alt="" className="h-5" />
								<span>Time Zone</span>
							</div>
							<img src={arrowdown} alt="" />
						</div>
					</div>
				</div>
				<div className="flex gap-8">
					<div className="bg-[#E7F0FF] w-1/4 h-16 rounded-full flex items-center justify-center gap-8 px-4">
						<span className="font-medium text-sm text-[#1C4481]">
							Online
						</span>
						<div className="w-14 h-6 bg-[#1C4481] rounded-full flex items-center justify-end px-1">
							<div className="bg-white h-4 w-4 rounded-full"></div>
						</div>
					</div>
					<div className="bg-[#E7F0FF] w-1/4 h-16 rounded-full flex items-center justify-center gap-8 px-4">
						<span className="font-medium text-sm text-[#1C4481]">
							PC-Viva/Practical
						</span>
						<div className="w-14 h-6 border-2 border-[#1C4481] bg-white rounded-full flex items-center justify-start px-1">
							<div className="bg-[#1C4481] h-4 w-4 rounded-full"></div>
						</div>
					</div>
					<div className="bg-[#E7F0FF] w-1/4 h-16 rounded-full flex items-center justify-center gap-8 px-4">
						<span className="font-medium text-sm text-[#1C4481]">
							Paid Exam
						</span>
						<div className="w-14 h-6 bg-[#1C4481] rounded-full flex items-center justify-end px-1">
							<div className="bg-white h-4 w-4 rounded-full"></div>
						</div>
					</div>
					<div className="bg-[#E7F0FF] w-1/4 h-16 rounded-full flex items-center justify-center gap-8 px-4">
						<span className="font-medium text-sm text-[#1C4481]">
							Hackathon Type
						</span>
						<div className="w-14 h-6 bg-[#1C4481] rounded-full flex items-center justify-end px-1">
							<div className="bg-white h-4 w-4 rounded-full"></div>
						</div>
					</div>
				</div>
				<div className="flex gap-8 absolute bottom-0 left-1/4 translate-y-1/2 w-full">
					<div className="flex items-center justify-center bg-[#1C4481] w-1/4 rounded-full h-14 text-white text-lg">
						<span>Submit & Close</span>
					</div>
					<div className="flex items-center justify-center bg-[#1C4481] w-1/4 rounded-full h-14 text-white text-lg">
						<span>Submit & Next</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddExam;
