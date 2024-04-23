import React from "react";
import leftBg from "/leftBg.jpg";
import { BsThreeDots } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { LuSquareAsterisk } from "react-icons/lu";
import { FaCircleExclamation } from "react-icons/fa6";
import exam from "/exam.png";
import books from "/books.png";
import cap from "/cap.png";
import bulb from "/bulb.png";
import building from "/building.png";

function LoginScreen() {
	return (
		<div className="flex flex-col lg:flex-row  min-h-screen items-center font-custom">
			{/* Left Side */}
			<div className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center">
				<div className="absolute inset-0 z-[-1] overflow-hidden">
					<img
						src={leftBg}
						alt=""
						className="w-full h-full object-fill absolute inset-0"
					/>
				</div>
				<div className="bg-[#ffffff] h-4/5 w-3/4 lg:w-4/5 xl:w-2/3 rounded-3xl p-6 flex flex-col gap-4 relative z-10">
					<h1 className="text-xl font-medium text-[#858585]">
						Candidate <br />
						Login
					</h1>
					<div className="bg-[#1b4581] text-white h-12 p-4 text-center rounded-3xl flex items-center justify-center gap-4 hover:cursor-pointer">
						<BsThreeDots className="text-[#1b4581] bg-white rounded h-5 w-8" />
						<p className="text-sm font-medium">Login with OTP</p>
					</div>
					<div className="relative w-full mx-auto my-2">
						<div className="absolute top-1/2 left-0 w-full border-t border-[#9E9E9E73]"></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#CECECE] rounded-full flex items-center justify-center">
							<span className="text-[#5C5C5C] text-[12px] font-medium">
								OR
							</span>
						</div>
					</div>
					<p className="text-center text-sm font-medium text-[#383838]">
						Login With Username/Email
					</p>
					<div className="flex flex-col gap-2">
						<div className="relative h-10">
							<IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
							<input
								type="text"
								placeholder="Username/Email"
								className="pl-8 pr-4 w-full h-10 shadow-customShadow outline-none placeholder:text-sm placeholder:text-[#1C4481]"
							/>
						</div>
						<p className="text-[#7c7b7b] text-sm hover:cursor-pointer">
							Forget Username?
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<div className="relative h-10">
							<LuSquareAsterisk className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
							<VscEye className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#1C4481]" />
							<FaCircleExclamation className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 text-[#1b4581]" />
							<input
								type="password"
								placeholder="Password"
								className="w-full h-10 p-4 pl-8 shadow-customShadow outline-none text-sm placeholder:text-sm placeholder:text-[#1C4481]"
							/>
						</div>
						<p className="text-[#389393] text-sm hover:cursor-pointer">
							Forget Password?
						</p>
					</div>
					<div className="bg-[#1b4581] text-white h-12 p-2 flex justify-center items-center rounded-3xl hover:cursor-pointer">
						<p>Login</p>
					</div>
					<div className="text-sm text-center font-semibold text-[#3C4345]">
						<p>
							Not registered yet?{" "}
							<span className="text-[#0F9FCC] hover:cursor-pointer font-medium">
								Create an account
							</span>
						</p>
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-0">
				<div className="w-5/6 lg:w-4/5 gap-8 xl:w-2/3 bg-[#e4ecf9] p-8 rounded-3xl flex flex-col items-center justify-between py-14">
					<p className="text-center text-[#1C4481] font-medium">
						Lorem ipsum dolor sit, amet consectetur adipisicing.
					</p>
					<div className="bg-[#1b4581] flex items-center justify-center gap-2 text-sm px-4 sm:px-10 py-3 rounded-3xl text-white hover:cursor-pointer">
						<BsThreeDots className="text-white p-1 rounded-full  border-white border-2 h-8 w-8" />
						<p className="text-nowrap font-medium">
							Login Via Exam Passcode
						</p>
					</div>
					<p className="text-[#494949] text-sm font-medium">
						Lorem ipsum dolor sit.
					</p>
				</div>
				<img
					src={exam}
					alt=""
					className="absolute h-36 scale-x-[-1] bottom-0 right-0"
				/>
				<img
					src={books}
					alt=""
					className="absolute h-32 top-10 right-10 grayscale"
				/>
				<img
					src={cap}
					alt=""
					className="absolute bottom-4 h-20 right-[550px] "
				/>
				<img
					src={bulb}
					alt=""
					className="absolute top-16 scale-x-[-1] h-24 right-[550px] "
				/>
				<img
					src={building}
					alt=""
					className="absolute right-2 h-16 top-[180px]"
				/>
			</div>
		</div>
	);
}

export default LoginScreen;
