import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";
import upload from "../../assets/AdminPanel/upload.png";
import qualification from "../../assets/AdminPanel/qualification.png";
import plus from "../../assets/AdminPanel/plus.png";
import cross from "../../assets/AdminPanel/cross.png";
import addring from "../../assets/AdminPanel/addring.png";

function AddQuestionBank() {
	return (
		<div className="bg-[#F3F7FF] flex items-center">
			<div className="flex flex-col gap-8 shadow-allBorder min-h-[1400px] w-full bg-white my-4 mx-2 rounded-3xl p-8">
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
									<span>Choose Qualification Package</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Question Bank</span>
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
									<span>Choose NOS</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Exam Type</span>
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
									<span>Question Type</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Choose Difficulty</span>
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
									<span>Question Instruction</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
						<div className="w-1/2 flex items-center gap-4">
							<div className="h-16 w-96 flex items-center justify-between px-4 gap-2 border bg-white rounded-md">
								<div className="flex justify-between gap-2 text-[#1C4481]">
									<img src={sector} alt="" className="h-5" />
									<span>Question Language</span>
								</div>
								<img src={arrowdown} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#F3F7FF] w-full flex flex-col gap-4 min-h-[700px] rounded-xl p-4">
					<span className="font-semibold text-[#1C4481]">
						Type Question
					</span>
					<div className="flex flex-col p-4 bg-white shadow-allBorder h-56 rounded-lg">
						<div className="w-1/3">
							<span className="font-semibold text-[#1C4481] p-4">
								Add Media
							</span>
						</div>
						<div className="flex w-full">
							<div className="flex w-full">
								<div className="flex flex-col gap-4 w-1/3 h-48 p-4">
									<div className="w-2/3 h-36 rounded-lg shadow-allBorder flex flex-col items-center justify-end p-4 bg-[#F3F7FF]">
										<span className="text-sm text-[#1C4481]">
											Upload Image
										</span>
									</div>
								</div>
								<div className="flex flex-col gap-4 w-1/3 h-48 p-4">
									<div className="w-2/3 h-36 rounded-lg shadow-allBorder flex flex-col items-center justify-end p-4 bg-[#F3F7FF]">
										<span className="text-sm text-[#1C4481]">
											Upload Image
										</span>
									</div>
								</div>
								<div className="flex flex-col gap-4 w-1/3 h-48 p-4 ">
									<div className="w-2/3 h-36 rounded-lg shadow-allBorder flex flex-col items-center justify-end p-4 bg-[#F3F7FF]">
										<span className="text-sm text-[#1C4481]">
											Upload Image
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="flex items-center gap-3 py-4 w-full justify-between text-[#1C4481]">
								<div className="flex w-11/12  justify-between">
									<div className="flex items-center gap-3">
										<div className="h-7 w-7 rounded-md  border-2 border-[#1C4481]"></div>
										<span className="font-medium">
											Correct Option
										</span>
									</div>
									<div className="bg-white w-1/2 px-6 text-black border h-12 rounded-md flex items-center">
										<span>Image name.jpeg</span>
									</div>
									<div className="border-2 px-6 py-2 rounded-full font-medium border-[#1C4481]">
										<span>Browse</span>
									</div>
								</div>
								<span className="font-medium text-nowrap">
									View Images
								</span>
							</div>
							<div className="flex items-center gap-3 py-4 w-full justify-between text-[#1C4481]">
								<div className="flex w-11/12  justify-between">
									<div className="flex items-center gap-3">
										<div className="h-7 w-7 rounded-md  border-2 border-[#1C4481]"></div>
										<span className="font-medium">
											Correct Option
										</span>
									</div>
									<div className="bg-white w-1/2 px-6 text-black border h-12 rounded-md flex items-center">
										<span>Image name.jpeg</span>
									</div>
									<div className="border-2 px-6 py-2 rounded-full font-medium border-[#1C4481]">
										<span>Browse</span>
									</div>
								</div>
								<span className="font-medium text-nowrap">
									View Images
								</span>
							</div>
							<div className="flex items-center gap-3 py-4 w-full justify-between text-[#1C4481]">
								<div className="flex w-11/12  justify-between">
									<div className="flex items-center gap-3">
										<div className="h-7 w-7 rounded-md  border-2 border-[#1C4481]"></div>
										<span className="font-medium">
											Correct Option
										</span>
									</div>
									<div className="bg-white w-1/2 px-6 text-black border h-12 rounded-md flex items-center">
										<span>Image name.jpeg</span>
									</div>
									<div className="border-2 px-6 py-2 rounded-full font-medium border-[#1C4481]">
										<span>Browse</span>
									</div>
								</div>
								<span className="font-medium text-nowrap">
									View Images
								</span>
							</div>
							<div className="flex items-center gap-3 py-4 w-full justify-between text-[#1C4481]">
								<div className="flex w-11/12  justify-between">
									<div className="flex items-center gap-3">
										<div className="h-7 w-7 rounded-md  border-2 border-[#1C4481]"></div>
										<span className="font-medium">
											Correct Option
										</span>
									</div>
									<div className="bg-white w-1/2 px-6 text-black border h-12 rounded-md flex items-center">
										<span>Image name.jpeg</span>
									</div>
									<div className="border-2 px-6 py-2 rounded-full font-medium border-[#1C4481]">
										<span>Browse</span>
									</div>
								</div>
								<span className="font-medium text-nowrap w-[110px]"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-10">
					<div className="h-14 w-48 text-white flex items-center justify-center bg-[#1C4481] rounded-full">
						<span>Submit & Add More</span>
					</div>
					<div className="h-14 w-1/6 text-[#E93A3A] flex items-center justify-center border-2 border-[#E93A3A] rounded-full">
						<span>Cancel</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddQuestionBank;
