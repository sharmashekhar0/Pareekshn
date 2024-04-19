import React from "react";
import marital from "../../assets/Dashboard/marital.png";
import category from "../../assets/Dashboard/category.png";
import abled from "../../assets/Dashboard/abled.png";
import language from "../../assets/Dashboard/language.png";
import key from "../../assets/Dashboard/key.png";

function ChangePassword() {
	return (
		<div className="flex flex-col gap-8 py-4">
			<div className="flex flex-col gap-1 shadow-allBorder rounded-md px-4 py-2 w-1/2">
				<div className="flex  gap-2">
					<img src={key} alt="" className="w-5" />
					<span>Old Password</span>
				</div>
				<div>
					<input
						type="password"
						placeholder="**************"
						className="outline-none px-7 placeholder:text-black text-lg w-full "
					/>
				</div>
			</div>
			<div className="flex flex-col gap-1 shadow-allBorder rounded-md px-4 py-2 w-1/2">
				<div className="flex  gap-2">
					<img src={key} alt="" className="w-5" />
					<span>New Password</span>
				</div>
				<div>
					<input
						type="password"
						placeholder="**************"
						className="outline-none px-7 placeholder:text-black text-lg w-full "
					/>
				</div>
			</div>
			<div className="flex flex-col gap-1 shadow-allBorder rounded-md px-4 py-2 w-1/2">
				<div className="flex  gap-2">
					<img src={key} alt="" className="w-5" />
					<span>New Password</span>
				</div>
				<div>
					<input
						type="password"
						placeholder="**************"
						className="outline-none px-7 placeholder:text-black text-lg w-full "
					/>
				</div>
			</div>
			<div className="bg-[#1C4481] rounded-full w-28 mx-4 h-10 flex items-center justify-center text-white">
				<span>Save</span>
			</div>
		</div>
	);
}

export default ChangePassword;
