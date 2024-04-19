import arrowLeft from "/arrowLeft.png";
import React, { useState, useRef } from "react";

function UploadPhoto() {
	const [selectedImage, setSelectedImage] = useState(null);
	const fileInputRef = useRef(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setSelectedImage(imageUrl);
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">
						Candidate
					</span>
					<span className="font-semibold text-[#555555]">Panel</span>
				</div>
			</div>
			<div className="flex flex-col justify-between text-sm items-center gap-6 my-8">
				<span className="font-bold">Upload/Capture photo</span>
				<input
					type="file"
					accept="image/*"
					ref={fileInputRef}
					style={{ display: "none" }}
					onChange={handleImageChange}
				/>
				{selectedImage ? (
					<img src={selectedImage} alt="Selected" className="h-28" />
				) : (
					<img
						src="/upload.png"
						alt=""
						className="h-28"
						onClick={handleUploadClick}
					/>
				)}
				<span className="text-center text-[12px] text-[#6C6C6C]">
					Once you Click a picture it will show in this window, you
					can retake the picture clicking on the camera icon
				</span>
				<button className="bg-[#1C4481] text-white w-1/2 h-8 rounded-3xl">
					Upload
				</button>
			</div>
		</div>
	);
}

export default UploadPhoto;
