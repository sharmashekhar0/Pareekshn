import React from "react";
import sector from "../../assets/AdminPanel/sector.png";
import arrowdown from "../../assets/AdminPanel/arrowdown.png";
import status from "../../assets/AdminPanel/status.png";

function AddFeedback() {
	return (
		<div className="flex flex-col gap-8 shadow-allBorder my-8 mx-2 rounded-3xl p-8">
			<span className="text-[#1C4481] font-medium">Title</span>
			<div className="h-36 w-2/3 shadow-allBorder rounded-lg bg-[#F3F7FF]"></div>
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

export default AddFeedback;
