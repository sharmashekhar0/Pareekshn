import React from "react";
import openbook from "../../assets/Dashboard/openbook.png";

function OnlineProfile() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="flex flex-col gap-6 w-full">
				<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
					Online Profile
				</span>
				<div className="h-fit flex flex-col shadow-allBorder rounded-sm">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-sm bg-[#EAF2FE] ">
						<span>Facebook</span>
					</div>
					<div className="flex flex-col gap-x-4 h-fit justify-between">
						<div className="border border-t-[#c0c0c0] mt-8 w-full"></div>
						<div className="p-4 flex flex-col gap-4">
							<span>Profile Link : URL</span>
						</div>
					</div>
				</div>
				<div className="h-fit flex flex-col shadow-allBorder rounded-sm">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-sm bg-[#EAF2FE] ">
						<span>Linkedin</span>
					</div>
					<div className="flex flex-col gap-x-4 h-fit justify-between">
						<div className="border border-t-[#c0c0c0] mt-8 w-full"></div>
						<div className="p-4 flex flex-col gap-4">
							<span>Profile Link : URL</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 w-full">
				<span className="font-medium px-8 bg-[#1C4481] py-2 text-white">
					Work Profile
				</span>
				<div className="h-fit flex flex-col shadow-allBorder rounded-xl">
					<div className="flex justify-between text-[#1C4481] font-medium px-8 h-10 items-center rounded-t-xl bg-[#EAF2FE] ">
						<span>Work Sample 1</span>
					</div>
					<div className="flex flex-col gap-x-4 h-fit justify-between">
						<div className="flex justify-between w-full p-4">
							<div className="flex gap-2 text-sm w-1/3">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										Work Type
									</span>
									<div className="font-medium">
										Shiv Gupta
									</div>
								</div>
							</div>

							<div className="flex gap-2 text-sm w-2/3">
								<img src={openbook} alt="" className="h-5" />
								<div className="flex flex-col">
									<span className="text-[#1C4481]">
										URL/Link
									</span>
									<div className="font-medium">
										1986-07-01
									</div>
								</div>
							</div>
						</div>
						<div className="border border-t-[#c0c0c0] w-full"></div>
						<div className="p-4 flex flex-col gap-4">
							<span className="text-[#1C4481]">
								Work Description
							</span>
							<span>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quas nulla aspernatur est
								adipisci culpa, vel laboriosam tempore ad vitae
								incidunt eveniet fugiat! Id est alias error sed
								harum iure nisi vero ipsa excepturi. Illum
								voluptates natus ab repudiandae, blanditiis
								labore alias, corrupti enim numquam, quod quas
								id omnis quam dolores.
							</span>
						</div>
						<div className="p-4 flex flex-col items-center">
							<span className="text-[#1C4481] font-medium">Video.mp4</span>
							<div className="h-80 m-4 w-full bg-gray-700 rounded-3xl"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OnlineProfile;
