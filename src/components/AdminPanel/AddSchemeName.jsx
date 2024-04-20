import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";

function AddSchemeName() {
	return (
		<div className="flex flex-col gap-8 shadow-allBorder my-8 mx-2 rounded-3xl p-8">
			<div className="flex gap-16 text-[#1C4481]">
				<div className="shadow-allBorder rounded-lg h-14 w-1/3 flex items-center px-4 gap-1">
					<img src={sector} alt="" className="h-5" />
					<span>Scheme Type</span>
				</div>
				<div className="shadow-allBorder rounded-lg h-14 w-1/3 flex items-center px-4 justify-between">
					<div className="flex gap-2">
						<img src={status} alt="" className="h-5" />
						<span>Scheme Name</span>
					</div>
					<img src={arrowdown} alt="" />
				</div>
			</div>
			<div className="flex gap-16 text-[#1C4481]">
				<div className="shadow-allBorder rounded-lg h-14 w-1/3 flex items-center px-4 gap-1">
					<img src={sector} alt="" className="h-5" />
					<span>Status</span>
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

export default AddSchemeName;
