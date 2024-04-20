import React from "react";

function PlanAndDetails() {
	return (
		<div className="h-96 flex items-center justify-center gap-12">
			<div className="w-5/12 h-80 shadow-allBorder rounded-xl bg-[#F3F7FF] flex flex-col gap-4  font-medium text-[#1C4481] text-lg items-center justify-center">
				<span>Plan Details</span>
				<div className="w-11/12 h-60 bg-white rounded-lg shadow-allBorder flex  pt-4 justify-center gap-8">
					<div className="flex flex-col text-base font-medium">
						<span>Plan Name</span>
						<span>Total Cost (Per Exam)</span>
						<span>Discount (%)</span>
						<span>Time Limit (In Days)</span>
						<span>Total Storage (In GB)</span>
						<span>No of Exam</span>
						<span>Date</span>
					</div>
					<div className="flex flex-col text-base font-normal text-[#453D3D]">
						<span>Gold</span>
						<span>1000</span>
						<span>1.0%</span>
						<span>365Days</span>
						<span>1000.0 GB</span>
						<span>10000 Plan Expiration</span>
						<span>2022-12-31</span>
					</div>
				</div>
			</div>
			<div className="w-5/12 h-80 shadow-allBorder rounded-xl bg-[#F3F7FF] flex flex-col gap-4 font-medium text-[#1C4481] text-lg items-center justify-center">
				<span>Payment Details</span>
				<div className="w-11/12 h-60 bg-white pt-4 rounded-lg shadow-allBorder flex justify-center gap-8">
					<div className="flex flex-col text-base font-medium">
						<span>Payment Status</span>
						<span>Amount Paid (Rs)</span>
						<span>Payment Mode</span>
						<span>Payment Date</span>
					</div>
					<div className="flex flex-col text-base font-normal text-[#453D3D]">
						<span>Pending</span>
						<span>99000.00</span>
						<span>------</span>
						<span>16-6-2023</span>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default PlanAndDetails;
