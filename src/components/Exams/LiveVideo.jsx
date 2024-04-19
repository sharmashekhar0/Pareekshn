import React from "react";
import livevideo from "../../assets/Exams/livevideo.png";

function LiveVideo() {
	return (
		<div className="flex flex-col items-center">
			<div className="w-60 h-40 bg-[#092144] m-4 rounded-xl flex items-center justify-center">
				<img src={livevideo} alt="" className="w-56 h-36" />
			</div>
			<span className="font-medium text-[#444444]">Live Video</span>
		</div>
	);
}

export default LiveVideo;
