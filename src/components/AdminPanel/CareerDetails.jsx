import React from "react";
import download from "../../assets/Dashboard/download.png";
import close from "../../assets/Dashboard/close.png";
import pen from "../../assets/Dashboard/pen.png";
import openbook from "../../assets/Dashboard/openbook.png";

function CareerDetails() {
	return (
		<div className="flex flex-col gap-6 w-full ">
			<div className="flex flex-col gap-6 w-full">
				<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
					Career Profile
				</span>
				<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-12 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Career Profile</span>
					</div>
					<div className="flex p-4 flex-col h-60 justify-between">
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Industry Name
									</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Department Name
									</span>
									<div className="font-medium">Male</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Role Category
									</span>
									<div className="font-medium">
										1986-07-01
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Job Role
									</span>
									<div className="font-medium">Married</div>
								</div>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Job Type
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Type
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Shift
									</span>
									<div className="font-medium">
										Madhya Pradesh
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Expected Salary
									</span>
									<div className="font-medium">Sidhi</div>
								</div>
							</div>
						</div>
						<div className="flex w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Perferred State
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Perferred City
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 w-full">
				<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
					Resume
				</span>
				<div className="flex flex-col text-sm gap-4">
					<span className="text-[#1C4481] font-medium">
						Resume Headline
					</span>
					<span className="font-medium">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Porro unde officiis molestias.
					</span>
				</div>
				<div className="pb-4 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Resume</span>
					</div>
					<div className="flex p-4 flex-col h-fit gap-4">
						<span className="text-sm text-[#1C4481]">URL</span>
						<div className="h-14 flex justify-between w-2/3 items-center px-4 shadow-allBorder rounded-md">
							<div className="flex flex-col">
								<span className="font-medium">
									KuldeepCV.dov(1.5 MB)
								</span>
								<span className="text-sm text-[#828282]">
									Updated on Feb 2, 2023
								</span>
							</div>
							<div className="flex">
								<img src={download} alt="" />
								<img src={close} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="pb-4 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Video Resume</span>
					</div>
					<div className="flex p-4 flex-col h-fit gap-4">
						<span className="text-sm text-[#1C4481] w-full text-center">
							Video_Resume.mp4
						</span>
						<div className="bg-gray-500 h-72 w-full rounded-3xl"></div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 w-full">
				<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
					Employment
				</span>
				<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Employer-1</span>
					</div>
					<div className="flex p-4 flex-col h-60 justify-between">
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Status
									</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Industry
									</span>
									<div className="font-medium">Male</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Department
									</span>
									<div className="font-medium">
										1986-07-01
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOJ</span>
									<div className="font-medium">Married</div>
								</div>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOE</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Type
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">Town</span>
									<div className="font-medium">
										Madhya Pradesh
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										District
									</span>
									<div className="font-medium">Sidhi</div>
								</div>
							</div>
						</div>
						<div className="flex w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										State
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Pin Code
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Employer-2</span>
					</div>
					<div className="flex p-4 flex-col h-60 justify-between">
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Status
									</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Industry
									</span>
									<div className="font-medium">Male</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Department
									</span>
									<div className="font-medium">
										1986-07-01
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOJ</span>
									<div className="font-medium">Married</div>
								</div>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOE</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Type
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">Town</span>
									<div className="font-medium">
										Madhya Pradesh
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										District
									</span>
									<div className="font-medium">Sidhi</div>
								</div>
							</div>
						</div>
						<div className="flex w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										State
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Pin Code
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Employer-3</span>
					</div>
					<div className="flex p-4 flex-col h-60 justify-between">
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Status
									</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Industry
									</span>
									<div className="font-medium">Male</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Department
									</span>
									<div className="font-medium">
										1986-07-01
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOJ</span>
									<div className="font-medium">Married</div>
								</div>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">DOE</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Employment Type
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">Town</span>
									<div className="font-medium">
										Madhya Pradesh
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										District
									</span>
									<div className="font-medium">Sidhi</div>
								</div>
							</div>
						</div>
						<div className="flex w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										State
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Pin Code
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CareerDetails;
