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

function Header() {
	return (
		<div className="h-20 bg-[#305187] px-8 flex items-center justify-between">
			<img src={logo} alt="" className="h-4/5 my-auto" />
			<div className="flex  gap-6 items-center">
				<div className="flex items-center justify-around py-1 bg-[#FEFEFF1A] rounded-full h-14 w-[240px] pr-8">
					<img src={avatar} alt="" className="h-12" />
					<div className="flex font-medium text-white">
						<span className="text-nowrap">Narayan Singh</span>
					</div>
				</div>
				<div className="flex gap-3 h-10">
					<img src={logout} alt="" />
					<img src={questionMark} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Header;
