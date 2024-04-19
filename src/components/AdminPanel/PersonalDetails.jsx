import React from "react";
import pen from "../../assets/Dashboard/pen.png";
import openbook from "../../assets/Dashboard/openbook.png";

function PersonalDetails() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-col p-4 gap-6 w-full">
				<span className="font-medium px-8">Personal Details</span>
				<div className="h-56 shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-12 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Shiv Gupta</span>
					</div>
					<div className="flex p-4 flex-col justify-between h-2/3">
						<div className="flex justify-between w-full">
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">Name</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Gender
									</span>
									<div className="font-medium">Male</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Date of Birth
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
										Marital Status
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
										Category
									</span>
									<div className="font-medium">General</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Differently abled
									</span>
									<div className="font-medium">NO</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										State
									</span>
									<div className="font-medium">
										Madhya Pradesh
									</div>
								</div>
							</div>
							<div className="flex gap-2 text-sm w-1/4">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">City</span>
									<div className="font-medium">Sidhi</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col p-4 gap-6 w-full">
				<span className="font-medium px-8">Languages</span>
				<div className=" shadow-allBorder rounded-xl">
					<div className="flex justify-between font-medium px-8 h-12 items-center rounded-t-xl bg-[#7592BE] text-white">
						<span className="w-1/5 text-center">Languages</span>
						<span className="w-1/5 text-center">Proficiency</span>
						<span className="w-1/5 text-center">Read</span>
						<span className="w-1/5 text-center">Write</span>
						<span className="w-1/5 text-center">Speak</span>
					</div>
					<div className="flex  flex-col w-full h-2/3 text-sm">
						<div className="w-full flex px-8 py-2">
							<span className="w-1/5 text-center">Hindi</span>
							<span className="w-1/5 text-center">
								Proficient
							</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">No</span>
						</div>
						<div className="w-full flex bg-[#F3F7FF] border border-t-[#dedede] border-b-[#dedede] px-8 py-2">
							<span className="w-1/5 text-center">English </span>
							<span className="w-1/5 text-center">Beginner</span>
							<span className="w-1/5 text-center">No</span>
							<span className="w-1/5 text-center">No</span>
							<span className="w-1/5 text-center">Yes</span>
						</div>
						<div className="w-full flex px-8 py-2">
							<span className="w-1/5 text-center">Bangali</span>
							<span className="w-1/5 text-center">
								Proficient
							</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">No</span>
						</div>
						<div className="w-full flex bg-[#F3F7FF] border border-t-[#dedede] border-b-[#dedede] px-8 py-2">
							<span className="w-1/5 text-center">Assami </span>
							<span className="w-1/5 text-center">Beginner</span>
							<span className="w-1/5 text-center">No</span>
							<span className="w-1/5 text-center">No</span>
							<span className="w-1/5 text-center">Yes</span>
						</div>
						<div className="w-full flex px-8 py-2">
							<span className="w-1/5 text-center">Gujrati</span>
							<span className="w-1/5 text-center">
								Proficient
							</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">Yes</span>
							<span className="w-1/5 text-center">No</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 w-full">
					<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
						Education
					</span>
					<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
						<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
							<span>12th</span>
						</div>
						<div className="flex p-4 flex-col h-60 justify-between">
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											School/Institute Name
										</span>
										<div className="font-medium">
											Shiv Gupta
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											University/Board
										</span>
										<div className="font-medium">Male</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Course Name
										</span>
										<div className="font-medium">
											1986-07-01
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Specialization
										</span>
										<div className="font-medium">
											Married
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											State
										</span>
										<div className="font-medium">
											General
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											District
										</span>
										<div className="font-medium">NO</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Town
										</span>
										<div className="font-medium">
											Madhya Pradesh
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											% Percentage
										</span>
										<div className="font-medium">Sidhi</div>
									</div>
								</div>
							</div>
							<div className="flex w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Year of Passing
										</span>
										<div className="font-medium">
											General
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-72 flex flex-col shadow-allBorder rounded-xl">
						<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
							<span>10th</span>
						</div>
						<div className="flex p-4 flex-col h-60 justify-between">
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											School/Institute Name
										</span>
										<div className="font-medium">
											Shiv Gupta
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											University/Board
										</span>
										<div className="font-medium">Male</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Course Name
										</span>
										<div className="font-medium">
											1986-07-01
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Specialization
										</span>
										<div className="font-medium">
											Married
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											State
										</span>
										<div className="font-medium">
											General
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											District
										</span>
										<div className="font-medium">NO</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Town
										</span>
										<div className="font-medium">
											Madhya Pradesh
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											% Percentage
										</span>
										<div className="font-medium">Sidhi</div>
									</div>
								</div>
							</div>
							<div className="flex w-full">
								<div className="flex gap-2 text-sm w-1/4">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Year of Passing
										</span>
										<div className="font-medium">
											General
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 w-full">
					<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
						Education
					</span>
					<div className="h-fit p-2 text-sm flex flex-col gap-2 shadow-allBorder rounded-xl">
						<span className="text-[#1C4481] font-medium">
							Profile Summary
						</span>
						<span className="font-medium">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ex, aspernatur? Debitis, commodi!
						</span>
					</div>
					<div className="h-fit p-2 text-sm flex flex-col gap-2 shadow-allBorder rounded-xl">
						<span className="text-[#1C4481] font-medium">
							Accomplishment
						</span>
						<span className="font-medium">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ex, aspernatur? Debitis, commodi!
						</span>
					</div>
					<div className="h-fit p-2 text-sm flex flex-col gap-2 shadow-allBorder rounded-xl">
						<span className="text-[#1C4481] font-medium">
							Skills
						</span>
						<span className="font-medium">
							Skill-1, Skill-2, Skill-3
						</span>
					</div>
					<div className="h-fit flex flex-col shadow-allBorder rounded-xl">
						<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
							<span>IT Skill</span>
						</div>
						<div className="flex p-4 flex-col h-fit justify-between">
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Software Name
										</span>
										<div className="font-medium">
											Software-1
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Experience
										</span>
										<div className="font-medium">
											2+ years
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Last Year Used
										</span>
										<div className="font-medium">2000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-fit flex flex-col shadow-allBorder rounded-xl">
						<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
							<span>IT Skill</span>
						</div>
						<div className="flex p-4 flex-col h-fit justify-between">
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Software Name
										</span>
										<div className="font-medium">
											Software-1
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Experience
										</span>
										<div className="font-medium">
											2+ years
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Last Year Used
										</span>
										<div className="font-medium">2000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-fit flex flex-col shadow-allBorder rounded-xl">
						<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
							<span>IT Skill</span>
						</div>
						<div className="flex p-4 flex-col h-fit justify-between">
							<div className="flex justify-between w-full">
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Software Name
										</span>
										<div className="font-medium">
											Software-1
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Experience
										</span>
										<div className="font-medium">
											2+ years
										</div>
									</div>
								</div>
								<div className="flex gap-2 text-sm w-1/3">
									<img
										src={openbook}
										alt=""
										className="h-5"
									/>
									<div className="flex flex-col">
										<span className="text-[#1C4481]">
											Last Year Used
										</span>
										<div className="font-medium">2000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PersonalDetails;
