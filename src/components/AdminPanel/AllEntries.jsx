import React from "react";
import avatar from "/avatar.png";
import threedot from "../../assets/AdminPanel/threedot.png";
import updown from "../../assets/AdminPanel/updown.png";
import leftarrow from "../../assets/AdminPanel/leftarrow.png";
import AddSector from "./AddSector";
import AddQualificationPack from "./AddQualificationPack";
import AddNosPack from "./AddNosPack";
import AddGroup from "./AddGroup";
import AddCandidate from "./AddCandidate";
import AddAssessor from "./AddAssessor";
import AddQuestionBank from "./AddQuestionBank";
import AddExam from "./AddExam";

function AllEntries() {
	return (
		<div className="h-14 w-full">
			<div className="flex p-4 justify-between items-center">
				<span className="text-2xl font-medium text-[#626262]">
					Sector List
				</span>
				<div className="flex items-center w-1/5 justify-between">
					<div className="flex items-center gap-2 w-full h-14 border-2 border-[#1C4481] px-1 rounded-[100px]">
						<img src={avatar} alt="" className="h-10 m-1" />
						<div className="flex flex-col text-sm">
							<span className="font-semibold text-[#305187]">
								Welcome
							</span>
							<span className="font-medium">User TP</span>
						</div>
					</div>
				</div>
			</div>
			{/* <AddSector /> */}
			{/* <AddQualificationPack /> */}
			{/* <AddNosPack />	 */}
			{/* <AddGroup /> */}
			{/* <AddCandidate /> */}
			{/* <AddAssessor /> */}
			{/* <AddQuestionBank /> */}
			<AddExam />
			<div className="bg-[#F3F7FF] p-4  w-full min-h-screen flex flex-col gap-6">
				<span className="text-[#1C4481] font-medium">All Entries</span>
				<div className="shadow-allBorder rounded-t-3xl">
					<div className="bg-[#1C4481] h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-white">
							<span>Sr. No.</span>
							<img src={updown} alt="" />
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-white">
							<span>Sector</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-white">
							<span>Status</span>
							<img src={updown} alt="" />
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-white">
							<span>Action</span>
							<img src={updown} alt="" />
						</div>
					</div>
					<div className="h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>1</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="bg-[#f3f3f3] border-t-[#d2d2d2] border border-b-[#d2d2d2] h-14 w-full flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>2</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>3</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="bg-[#f3f3f3] border-t-[#d2d2d2] border border-b-[#d2d2d2] h-14 w-full flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>4</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>5</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="bg-[#f3f3f3] border-t-[#d2d2d2] border border-b-[#d2d2d2] h-14 w-full flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>6</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>7</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="bg-[#f3f3f3] border-t-[#d2d2d2] border border-b-[#d2d2d2] h-14 w-full flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>8</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="h-14 w-full rounded-t-3xl flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>9</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
					<div className="bg-[#f3f3f3] border-t-[#d2d2d2] border border-b-[#d2d2d2] h-14 w-full flex items-center px-4">
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<span>10</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-2/5 text-black">
							<span>Heritage</span>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<div className="bg-[#F3CF98] px-2 py-1 rounded-md text-[#B65017]">
								<span>Active</span>
							</div>
						</div>
						<div className="flex gap-2 items-center justify-center w-1/5 text-black">
							<img src={threedot} alt="" />
						</div>
					</div>
				</div>
				<div className="flex w-full justify-between px-4 items-center">
					<span className="text-[#1C4481] font-medium">
						Showing 1 to 10 of 20 entries
					</span>
					<div className="w-1/3 flex items-center justify-center">
						<div className="flex gap-4 items-center">
							<img
								src={leftarrow}
								alt=""
								className="bg-[#1C4481] h-6 w-6 p-2 rounded-md"
							/>
							<div className="flex gap-4">
								<span className="text-[#3A3A3A]">1</span>
								<span className="text-[#B4B4B4]">2</span>
								<span className="text-[#B4B4B4]">3</span>
								<span className="text-[#B4B4B4]">4</span>
								<span className="text-[#B4B4B4]">......</span>
								<span className="text-[#B4B4B4]">10</span>
							</div>
							<img
								src={leftarrow}
								alt=""
								className="bg-[#1C4481] scale-x-[-1] h-6 w-6 p-2 rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllEntries;
