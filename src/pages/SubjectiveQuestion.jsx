import React from "react";
import logo from "/logo.png";
import avatar from "/avatar.png";
import questionMark from "/questionMark.png";
import logout from "/logout.png";
import arrowDown from "/arrowDown.png";
import arrow from "/arrow.png";
import indicator from "/indicator.png";
import mandatory from "/mandatory.png";
import volume from "/volume.png";
import reset from "/reset1.png";
import previous from "/previous.png";
import play from "/play.png";
import next from "/next.png";
import lock from "/lock.png";
import timer from "/timer.png";

import { useState, useEffect } from "react";
import ChooseLanguage from "../components/Exams/ChooseLanguage";

function SubjectiveQuestion() {
	const [time, setTime] = useState(600);

	useEffect(() => {
		const timer = setInterval(() => {
			if (time > 0) {
				setTime((prevTime) => prevTime - 1);
			} else {
				setTime(600); // restart the timer after 10 minutes
			}
		}, 1000); // update every second

		return () => clearInterval(timer); // cleanup the timer on component unmount
	}, [time]);

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	return (
		<div className="min-h-screen">
			{/* Header */}
			<div className="h-20 bg-[#305187] px-8 flex items-center justify-between">
				<img src={logo} alt="" className="h-4/5 my-auto" />
				<span className="font-medium text-white text-xl">
					Online Exam
				</span>
				<div className="flex  gap-6">
					<div className="flex items-center justify-around py-1 gap-2 bg-[#FEFEFF1A] rounded-full h-14 w-[200px] px-2 pr-8">
						<img src={avatar} alt="" className="h-12" />
						<div className="flex flex-col font-medium text-white">
							<span>Manoj SinghG</span>
							<span>8234KY678564</span>
						</div>
					</div>
					<div className="flex gap-3 h-14">
						<img src={logout} alt="" />
						<img src={questionMark} alt="" />
					</div>
				</div>
			</div>
			{/* Main */}
			<div>
				{/* Theory and Language */}
				<div className="flex px-12 py-4 justify-between">
					<span className="text-[#0C49CA] text-2xl font-medium font-custom">
						Theory
					</span>
					<div className="flex w-1/3 justify-between">
						<div className="flex flex-col text-sm">
							<span className="text-[#0C49CA] mb-[1px]">
								Primary Language
							</span>
							<span className="font-medium">English</span>
						</div>
						{/* <div className="flex flex-col text-sm">
							<span className="text-[#0C49CA] mb-1">
								Secondary Language
							</span>
							<span className="border rounded-md p-1 font-medium px-2 flex items-center justify-between">
								English
								<img src={arrowDown} alt="" className="h-2" />
							</span>
						</div> */}
						<ChooseLanguage />
					</div>
				</div>
				<div className="min-h-screen bg-[#F3F7FF] flex flex-col mx-8 px-8 gap-4 border rounded-2xl">
					<div className="bg-white h-20 mt-4 rounded-2xl flex items-center px-4 justify-between">
						<div className="flex items-center w-8/12 justify-between">
							<img src={arrow} alt="" className="h-10 " />
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>1</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>2</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>3</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>4</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>5</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>6</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>7</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>8</span>
							</div>
							<div className="border-2 border-[#14540E] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>9</span>
							</div>
							<div className="bg-[#A6E097] h-12 w-12 flex items-center justify-center rounded-lg font-semibold text-2xl text-[#14540E]">
								<span>10</span>
							</div>
							<img
								src={arrow}
								alt=""
								className="scale-x-[-1] h-10"
							/>
						</div>
						<img src={indicator} alt="" className="h-12" />
					</div>
					<div className="bg-[#DDEAFF] h-40 px-8 rounded-lg">
						<div className="py-3 flex justify-between w-full">
							<div className="flex items-center ">
								<span className="text-[#1C4481] font-medium">
									11/12- Level 2, (MT Nos-3)
								</span>
							</div>
							<div className="flex gap-4">
								<div className="flex justify-center items-center border border-[#1C4481] py-1 px-4 rounded-lg font-medium">
									<span className="font-bold text-[#1C4481]">
										Max Marks - 20
									</span>
								</div>
								<img src={mandatory} alt="" className="h-8" />
							</div>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-black font-semibold w-4/5">
								Q. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever
								since the 1500s,
							</span>
							<img src={volume} alt="" className="h-8" />
						</div>
					</div>
					<div className="h-fit w-full">
						<div className="flex flex-col gap-8 py-8">
							<div className="flex w-4/5 items-center">
								<div className="w-1/2 flex gap-4 items-center">
									<div className="h-10 w-10 flex items-center justify-center rounded-full text-xl font-semibold border-black border-2">
										<span>A</span>
									</div>
									<div className="h-12 w-4/5 flex items-center rounded-full text-xl font-medium border-black border">
										<span className="ms-8">Cow</span>
									</div>
								</div>
								<div className="w-1/2 flex gap-4 items-center">
									<div className="h-10 w-10 flex items-center justify-center rounded-full text-xl font-semibold border-black border-2">
										<span>C</span>
									</div>
									<div className="h-12 w-4/5 flex items-center rounded-full text-xl font-medium border-black border">
										<span className="ms-8">Lion</span>
									</div>
								</div>
							</div>
							<div className="flex w-4/5 items-center">
								<div className="w-1/2 flex gap-4 items-center">
									<div className="h-10 w-10 flex items-center justify-center rounded-full text-xl font-semibold bg-[#1C4481] text-white">
										<span>B</span>
									</div>
									<div className="h-12 w-4/5 flex items-center rounded-full text-xl font-medium bg-[#1C4481] text-white ">
										<span className="ms-8">Tiger</span>
									</div>
								</div>
								<div className="w-1/2 flex gap-4 items-center">
									<div className="h-10 w-10 flex items-center justify-center rounded-full text-xl font-semibold border-black border-2">
										<span>D</span>
									</div>
									<div className="h-12 w-4/5 flex items-center rounded-full text-xl font-medium border-black border">
										<span className="ms-8">Elephant</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-3/4 flex items-center justify-center">
						<div className="flex gap-4 items-center justify-between w-1/2">
							<div className="border border-black rounded-full h-12 w-12 flex items-center justify-center">
								<img src={reset} alt="" className="h-8" />
							</div>
							<div className="border border-black rounded-full h-14 w-14 flex items-center justify-center">
								<img src={previous} alt="" className="h-6" />
							</div>
							<div className="border border-black rounded-full h-14 w-14 flex items-center justify-center">
								<img src={play} alt="" className="h-6" />
							</div>
							<div className="border border-black rounded-full h-14 w-14 flex items-center justify-center">
								<img src={next} alt="" className="h-6" />
							</div>
							<div className="border border-black rounded-full h-12 w-12 flex items-center justify-center">
								<img src={lock} alt="" className="h-6" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-16 right-16 h-36 fixed flex items-center justify-center">
				<img src={timer} alt="" className="h-36" />
				<span className="text-[#189C25] absolute text-xl font-bold">
					{formatTime(time)}
				</span>
			</div>
		</div>
	);
}

export default SubjectiveQuestion;
