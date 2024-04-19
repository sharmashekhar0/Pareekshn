import React from "react";
import person from "../../assets/Dashboard/person.png";
import gender from "../../assets/Dashboard/gender.png";
import date from "../../assets/Dashboard/date.png";
import email from "../../assets/Dashboard/email.png";
import mobile from "../../assets/Dashboard/mobile.png";
import user from "../../assets/Dashboard/user.png";

function PersonalUpdate() {
	return (
		<div className="flex flex-col w-2/3 gap-8">
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={person} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							First Name
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={person} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Last Name
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={gender} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Please Select Gender
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={date} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Date of Birth*
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={email} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">Email ID</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={mobile} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Mobile Number
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/2">
					<div className="flex items-center gap-2">
						<img src={user} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							User Name
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
		</div>
	);
}

export default PersonalUpdate;
