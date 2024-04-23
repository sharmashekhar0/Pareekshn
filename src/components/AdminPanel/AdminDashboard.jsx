import React from "react";
import batch from "../../assets/AdminPanel/batch.png";
import examgraph from "../../assets/AdminPanel/examgraph.png";
import map from "../../assets/AdminPanel/map.png";

function AdminDashboard() {
	return (
		<div className="bg-[#F3F7FF] px-2 py-4 flex flex-col gap-8">
			<div className="w-full flex gap-2 mb-8">
				<div className="w-2/3 flex flex-col gap-8 h-screen overflow-y-scroll no-scrollbar">
					<div className="flex gap-x-5">
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Batch
									</span>
									<span className="text-2xl font-medium">
										7505
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Completed
									</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Live</span>
									<span className="text-lg text-[#555555]">
										05
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Upcoming
									</span>
									<span className="text-lg text-[#555555]">
										500
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Candidate
									</span>
									<span className="text-2xl font-medium">
										174153
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Live</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-x-5">
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Exam
									</span>
									<span className="text-2xl font-medium">
										7448
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Theory
									</span>
									<span className="text-lg text-[#555555]">
										1986
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Viva</span>
									<span className="text-lg text-[#555555]">
										825
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Theory + Viva
									</span>
									<span className="text-lg text-[#555555]">
										4637
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Assessor
									</span>
									<span className="text-2xl font-medium">
										7505
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Completed
									</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Live</span>
									<span className="text-lg text-[#555555]">
										05
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Upcoming
									</span>
									<span className="text-lg text-[#555555]">
										500
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-x-5">
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Question Bank
									</span>
									<span className="text-2xl font-medium">
										174153
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Live</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Sector
									</span>
									<span className="text-2xl font-medium">
										7448
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Theory
									</span>
									<span className="text-lg text-[#555555]">
										1986
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Viva</span>
									<span className="text-lg text-[#555555]">
										825
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Theory + Viva
									</span>
									<span className="text-lg text-[#555555]">
										4637
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-x-5">
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Training Partner
									</span>
									<span className="text-2xl font-medium">
										7505
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Completed
									</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">Live</span>
									<span className="text-lg text-[#555555]">
										05
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-[#1C4481]">
										Upcoming
									</span>
									<span className="text-lg text-[#555555]">
										500
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-md border w-1/2 rounded-2xl text-sm">
							<div className="flex justify-between p-4">
								<div className="flex flex-col">
									<span className="text-base font-medium text-[#1C4481]">
										Admin
									</span>
									<span className="text-2xl font-medium">
										30
									</span>
								</div>
								<img src={batch} alt="" />
							</div>
							<div className="border-t"></div>
							<div className="flex justify-between p-4 font-medium">
								<div className="flex flex-col gap-2 w-1/2">
									<span className="text-[#1C4481]">
										Sub-Admin
									</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
								<div className="flex flex-col gap-2 w-1/2">
									<span className="text-[#1C4481]">
										Back-Admin
									</span>
									<span className="text-lg text-[#555555]">
										7000
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white shadow-md border rounded-2xl text-sm">
						<div className="flex justify-between p-4">
							<div className="flex flex-col">
								<span className="text-base font-medium text-[#1C4481]">
									Total Storage
								</span>
								<span className="text-2xl font-medium">
									1000.00 GB
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-base font-medium text-[#1C4481]">
									Storage Usage
								</span>
								<span className="text-2xl font-medium">
									51.03 GB
								</span>
							</div>
							<img src={batch} alt="" />
						</div>
						<div className="border-t"></div>
						<div className="flex justify-between p-4 font-medium">
							<div className="flex flex-col gap-2">
								<span className="text-[#1C4481]">Image</span>
								<span className="text-lg text-[#555555]">
									27.08 GB
								</span>
							</div>
							<div className="flex flex-col gap-2">
								<span className="text-[#1C4481]">Audio</span>
								<span className="text-lg text-[#555555]">
									736.43 MB
								</span>
							</div>
							<div className="flex flex-col gap-2">
								<span className="text-[#1C4481]">Video</span>
								<span className="text-lg text-[#555555]">
									6.5 GB
								</span>
							</div>
							<div className="flex flex-col gap-2">
								<span className="text-[#1C4481]">Document</span>
								<span className="text-lg text-[#555555]">
									1.69
								</span>
							</div>
							<div className="flex flex-col gap-2">
								<span className="text-[#1C4481]">Archieve</span>
								<span className="text-lg text-[#555555]">
									16.73
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-sm w-1/3 flex flex-col gap-2 h-screen">
					<img src={examgraph} alt="" className="h-[400px]" />
					<img src={map} alt="" />
				</div>
			</div>
			<div className="flex gap-4">
				<div className="border w-1/3 h-96 flex flex-col justify-between p-4 rounded-xl shadow-md bg-white overflow-y-scroll no-scrollbar">
					<div className="flex text-sm justify-between items-center">
						<div className="flex flex-col">
							<span className="font-medium text-[#1C4481]">
								Calendar
							</span>
							<span className="text-[555555] font-medium">
								June 2023
							</span>
						</div>
						<div className="flex  gap-6 items-center">
							<div className="flex gap-2">
								<span className="bg-cyan-300 font-medium w-7 h-6 text-center rounded-full flex justify-center items-center text-[#1C4481]">
									M
								</span>
								<span className="bg-cyan-300 font-medium w-7 h-6 text-center rounded-full flex justify-center items-center text-[#1C4481]">
									W
								</span>
								<span className="bg-cyan-300 font-medium w-7 h-6 text-center rounded-full flex justify-center items-center text-[#1C4481]">
									Y
								</span>
							</div>
							<div className="flex gap-2">
								<span className="flex items-center justify-center w-5 rounded-full h-5 bg-[#1C4481] text-white">
									&lt;
								</span>
								<span className="flex items-center justify-center w-5 rounded-full h-5 bg-[#1C4481] text-white">
									&gt;
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-between p-2 h-60">
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Sun
							</span>
							<span></span>
							<span>2</span>
							<span>9</span>
							<span>16</span>
							<span>23</span>
							<span>30</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Man
							</span>
							<span></span>
							<span>3</span>
							<span>10</span>
							<span>17</span>
							<span>24</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Tue
							</span>
							<span></span>
							<span>4</span>
							<span>11</span>
							<span>18</span>
							<span>25</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Wed
							</span>
							<span></span>
							<span>5</span>
							<span>12</span>
							<span>19</span>
							<span>26</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Thu
							</span>
							<span></span>
							<span>6</span>
							<span>13</span>
							<span>20</span>
							<span>27</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Fri
							</span>
							<span></span>
							<span>7</span>
							<span>14</span>
							<span>21</span>
							<span>28</span>
						</div>
						<div className="flex flex-col justify-between">
							<span className="font-medium text-[#1C4481]">
								Sat
							</span>
							<span>1</span>
							<span>8</span>
							<span>15</span>
							<span>22</span>
							<span>29</span>
						</div>
					</div>
					<div className="border-t"></div>
					<div className="text-sm flex flex-col gap-4 py-4">
						<span className="font-medium text-[#1C4481]">
							Upcoming Events
						</span>
						<div className="h-8 w-full font-medium flex items-center bg-cyan-300 rounded-full ps-6">
							<span>5:30a Rel F</span>
						</div>
						<div className="h-8 w-full font-medium flex items-center bg-cyan-200 rounded-full ps-6">
							<span>5:30a Rel F</span>
						</div>
						<div className="h-8 w-full font-medium flex items-center bg-cyan-300 rounded-full ps-6">
							<span>5:30a Rel F</span>
						</div>
					</div>
				</div>
				<div className="w-2/3 h-96 p-8 rounded-xl border bg-white flex flex-col gap-8">
					<div className="flex justify-between items-center">
						<span className="text-[#1C4481] font-medium">
							Messages
						</span>
						<div className="flex justify-between gap-4">
							<span className="h-8 bg-[#1C4481] flex items-center justify-center px-4 text-white rounded-full">
								Assessor
							</span>
							<span className="h-8 border-2 border-[#1C4481] flex items-center justify-center px-4 text-[#1C4481]  rounded-full font-medium">
								Candidate
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex items-center px-4 border rounded-md py-2 bg-[#e1e1e1] border-[#cbcbcb] text-[#484848]">
							<span>
								Dear Assessor, All the best! Regards, Team SPIWD
							</span>
						</div>
						<div className="flex items-center px-4 border rounded-md py-2 bg-[#e1e1e1] border-[#cbcbcb] text-[#484848]">
							<span>
								Dear Assessor, All the best! Regards, Team SPIWD
							</span>
						</div>
						<div className="flex items-center px-4 border rounded-md py-2 bg-[#e1e1e1] border-[#cbcbcb] text-[#484848]">
							<span>
								Dear Assessor, All the best! Regards, Team SPIWD
							</span>
						</div>
						<div className="flex items-center px-4 border rounded-md py-2 bg-[#e1e1e1] border-[#cbcbcb] text-[#484848]">
							<span>
								Dear Assessor, All the best! Regards, Team SPIWD
							</span>
						</div>
						<div className="flex items-center px-4 border rounded-md py-2 bg-[#e1e1e1] border-[#cbcbcb] text-[#484848]">
							<span>
								Dear Assessor, All the best! Regards, Team SPIWD
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
