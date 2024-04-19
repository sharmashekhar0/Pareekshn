import React from "react";
import { Link } from "react-router-dom";

function Screens() {
	return (
		<div className="flex flex-col gap-8">
			<div className="h-20 p-8 flex gap-8">
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/verify-profile"}>
						<span>Screen 1</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/upload-photo"}>
						<span>Screen 2</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/login-passcode"}>
						<span>Screen 3</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/candidate-page/upload-id-photo"}
					>
						<span>Screen 4</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/verify-otp"}>
						<span>Screen 5</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/verify-aadhar"}>
						<span>Screen 6</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/aadhar-otp"}>
						<span>Screen 7</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/candidate-page/login-with-otp"}>
						<span>Screen 8</span>
					</Link>
				</div>
			</div>
			<div className="h-20 p-8 flex gap-8">
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/dashboard/exam-fee-details"}>
						<span>Exam Fee</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/personal-profile/personal-update"
						}
					>
						<span>User Profile</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/personal-profile/personal-details"
						}
					>
						<span>Personal Details</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/personal-profile/career-details"
						}
					>
						<span>Career Details</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/personal-profile/certificate-project"
						}
					>
						<span>Certificate Project</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/personal-profile/online-profile"
						}
					>
						<span>Online Profile</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/profile-update"}
					>
						<span>Profile Update</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/education-profile"}
					>
						<span>Education Profile</span>
					</Link>
				</div>
			</div>
			<div className="h-20 p-8 flex gap-8">
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/login-screen"}>
						<span>Login Screen</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/sign-up"}>
						<span>Sign Up</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/instruction"}>
						<span>Instruction</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/subjective-question"}>
						<span>Subject Question</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/employment"}
					>
						<span>Employment</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/dashboard/user-profile/skills"}>
						<span>Skills</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/change-password"}
					>
						<span>Change Password</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/career-profile"}
					>
						<span>Career Profile</span>
					</Link>
				</div>
			</div>
			<div className="h-20 p-8 flex gap-8">
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/dashboard/user-profile/resume"}>
						<span>Resume</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={
							"/dashboard/user-profile/qualification-pack-notfound"
						}
					>
						<span>Not Found</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/sectors"}
					>
						<span>Sectors</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-36 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link
						target="_blank"
						to={"/dashboard/user-profile/qualification-pack"}
					>
						<span>Qualification Pack</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-40 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/corporate-dashboard"}>
						<span>Corporate Dashboard</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-44 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/corporate-dashboard-1"}>
						<span>Corporate Dashboard 1</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-44 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/corporate-dashboard-2"}>
						<span>Corporate Dashboard 2</span>
					</Link>
				</div>
			</div>
			<div className="h-20 p-8 flex gap-8">
				<div className="bg-[#1C4481] w-44 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/corporate-profile"}>
						<span>Corporate Profile</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-32 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/exam-list"}>
						<span>Exam List</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-32 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/viva-practical"}>
						<span>Viva Practical</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-44 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/instruction-assessor"}>
						<span>Instruction Assessor</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-32 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/question-status"}>
						<span>Question Status</span>
					</Link>
				</div>
				<div className="bg-[#1C4481] w-32 h-10 rounded-full flex justify-center items-center text-white text-sm font-medium">
					<Link target="_blank" to={"/feedback"}>
						<span>Feedback</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Screens;
