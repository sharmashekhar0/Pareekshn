import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import CandidatePage from "./pages/CandidatePage.jsx";
import Screens from "./pages/Screens/Screens.jsx";
import VerifyProfile from "./components/VerifyProfile.jsx";
import UploadPhoto from "./components/UploadPhoto.jsx";
import EnterLoginPasscode from "./components/EnterLoginPasscode.jsx";
import UploadIDPhoto from "./components/UploadIDPhoto.jsx";
import OTPVerify from "./components/OTPVerify.jsx";
import AadharVerify from "./components/AadharVerify.jsx";
import AadharOTP from "./components/AadharOTP.jsx";
import LoginWithOTP from "./components/LoginWithOTP.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Instruction from "./components/Instruction.jsx";
import SubjectiveQuestion from "./pages/SubjectiveQuestion.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ExamFeeDetails from "./components/Dashboard/ExamFeeDetails.jsx";
import UserProfile from "./components/Dashboard/UserProfile.jsx";
import PersonalProfile from "./components/Dashboard/PersonalProfile.jsx";
import PersonalUpdate from "./components/Dashboard/PersonalUpdate.jsx";
import PersonalDetails from "./components/AdminPanel/PersonalDetails.jsx";
import CareerDetails from "./components/AdminPanel/CareerDetails.jsx";
import CertificateProject from "./components/AdminPanel/CertificateProject.jsx";
import OnlineProfile from "./components/AdminPanel/OnlineProfile.jsx";
import ProfileUpdate from "./components/Dashboard/ProfileUpdate.jsx";
import EducationProfile from "./components/Dashboard/EducationProfile.jsx";
import Employment from "./components/Dashboard/Employment.jsx";
import Skills from "./components/Dashboard/Skills.jsx";
import ChangePassword from "./components/Dashboard/ChangePassword.jsx";
import CareerProfile from "./components/Dashboard/CareerProfile.jsx";
import Resume from "./components/Dashboard/Resume.jsx";
import QualificationPackNotFound from "./components/Dashboard/QualificationPackNotFound.jsx";
import Sectors from "./components/Dashboard/Sectors.jsx";
import QualificationPacks from "./components/Dashboard/QualificationPacks.jsx";
import CorporateHackathonDashboard from "./pages/Hackathon/CorporateHackathonDashboard.jsx";
import CorporateHackathonDashboard1 from "./components/Hackathon/CorporateHackathonDashboard1.jsx";
import CorporateHackathonDashboard2 from "./components/Hackathon/CorporateHackathonDashboard2.jsx";
import LeaderBoard from "./components/Dashboard/LeaderBoard.jsx";
import DashboardCorporateProfile from "./components/Hackathon/DashboardCorporateProfile.jsx";
import ExamList from "./pages/Assessor/ExamList.jsx";
import VivaPractical from "./pages/Assessor/VivaPractical.jsx";
import InstructionAssessor from "./pages/Assessor/Instruction";
import VivaByAssessor from "./pages/Assessor/VivaByAssessor.jsx";
import QuestionStatus from "./pages/Assessor/QuestionStatus.jsx";
import Feedback from "./pages/Assessor/Feedback.jsx";
import AllEntriesPage from "./pages/AdminPanel/AllEntriesPage.jsx";
import AddSector from "./components/AdminPanel/AddSector.jsx";
import AddQualificationPack from "./components/AdminPanel/AddQualificationPack.jsx";
import AddNosPack from "./components/AdminPanel/AddNosPack.jsx";
import AddGroup from "./components/AdminPanel/AddGroup.jsx";
import AddCandidate from "./components/AdminPanel/AddCandidate.jsx";
import AddAssessor from "./components/AdminPanel/AddAssessor.jsx";
import AddQuestionBank from "./components/AdminPanel/AddQuestionBank.jsx";
import AddExam from "./components/AdminPanel/AddExam.jsx";
import AddTrainingPartner from "./components/AdminPanel/AddTrainingPartner.jsx";
import AddTrainingCenter from "./components/AdminPanel/AddTrainingCenter.jsx";
import AddSchemeList from "./components/AdminPanel/AddSchemeList.jsx";
import AddSchemeName from "./components/AdminPanel/AddSchemeName.jsx";
import AddSubAdmin from "./components/AdminPanel/AddSubAdmin.jsx";
import AddBackOfficeSubAdmin from "./components/AdminPanel/AddBackOfficeSubAdmin.jsx";
import AddFeedback from "./components/AdminPanel/AddFeedback.jsx";
import PlanAndDetails from "./components/AdminPanel/PlanAndDetails.jsx";
import AddSubScheme from "./components/AdminPanel/AddSubScheme.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Screens />} />
			<Route path="/candidate-page" element={<CandidatePage />}>
				<Route
					path="/candidate-page/verify-profile"
					element={<VerifyProfile />}
				></Route>
				<Route
					path="/candidate-page/upload-photo"
					element={<UploadPhoto />}
				></Route>
				<Route
					path="/candidate-page/login-passcode"
					element={<EnterLoginPasscode />}
				></Route>
				<Route
					path="/candidate-page/upload-id-photo"
					element={<UploadIDPhoto />}
				></Route>
				<Route
					path="/candidate-page/verify-otp"
					element={<OTPVerify />}
				></Route>
				<Route
					path="/candidate-page/verify-aadhar"
					element={<AadharVerify />}
				></Route>
				<Route
					path="/candidate-page/aadhar-otp"
					element={<AadharOTP />}
				></Route>
				<Route
					path="/candidate-page/login-with-otp"
					element={<LoginWithOTP />}
				></Route>
			</Route>
			<Route path="/login-screen" element={<LoginScreen />}></Route>
			<Route path="/sign-up" element={<SignUpPage />} />
			<Route path="/instruction" element={<Instruction />} />
			<Route
				path="/subjective-question"
				element={<SubjectiveQuestion />}
			/>
			<Route path="/dashboard" element={<Dashboard />}>
				<Route
					path="/dashboard/exam-fee-details"
					element={<ExamFeeDetails />}
				></Route>
				<Route path="/dashboard/user-profile" element={<UserProfile />}>
					<Route
						path="/dashboard/user-profile/personal-profile"
						element={<PersonalProfile />}
					>
						<Route
							path="/dashboard/user-profile/personal-profile/personal-update"
							element={<PersonalUpdate />}
						></Route>
						<Route
							path="/dashboard/user-profile/personal-profile/personal-details"
							element={<PersonalDetails />}
						></Route>
						<Route
							path="/dashboard/user-profile/personal-profile/career-details"
							element={<CareerDetails />}
						></Route>
						<Route
							path="/dashboard/user-profile/personal-profile/certificate-project"
							element={<CertificateProject />}
						></Route>
						<Route
							path="/dashboard/user-profile/personal-profile/online-profile"
							element={<OnlineProfile />}
						></Route>
					</Route>
					<Route
						path="/dashboard/user-profile/profile-update"
						element={<ProfileUpdate />}
					></Route>
					<Route
						path="/dashboard/user-profile/education-profile"
						element={<EducationProfile />}
					></Route>
					<Route
						path="/dashboard/user-profile/employment"
						element={<Employment />}
					></Route>
					<Route
						path="/dashboard/user-profile/skills"
						element={<Skills />}
					></Route>
					<Route
						path="/dashboard/user-profile/change-password"
						element={<ChangePassword />}
					></Route>
					<Route
						path="/dashboard/user-profile/career-profile"
						element={<CareerProfile />}
					></Route>
					<Route
						path="/dashboard/user-profile/resume"
						element={<Resume />}
					></Route>
					<Route
						path="/dashboard/user-profile/qualification-pack-notfound"
						element={<QualificationPackNotFound />}
					></Route>
					<Route
						path="/dashboard/user-profile/sectors"
						element={<Sectors />}
					></Route>
					<Route
						path="/dashboard/user-profile/person-details"
						element={<Sectors />}
					></Route>
					<Route
						path="/dashboard/user-profile/qualification-pack"
						element={<QualificationPacks />}
					></Route>
				</Route>
			</Route>
			<Route
				path="corporate-dashboard"
				element={<CorporateHackathonDashboard />}
			></Route>
			<Route
				path="/corporate-dashboard-1"
				element={<CorporateHackathonDashboard1 />}
			>
				{/* <Route
					path="/corporate-dashboard-1/leaderboard"
					element={<LeaderBoard />}
				></Route> */}
			</Route>
			<Route
				path="/corporate-dashboard-2"
				element={<CorporateHackathonDashboard2 />}
			></Route>
			<Route
				path="/corporate-profile"
				element={<DashboardCorporateProfile />}
			></Route>
			<Route path="/exam-list" element={<ExamList />}></Route>
			<Route path="/viva-practical" element={<VivaPractical />}></Route>
			<Route
				path="instruction-assessor"
				element={<InstructionAssessor />}
			></Route>
			<Route path="/viva-assessor" element={<VivaByAssessor />} />
			<Route path="/question-status" element={<QuestionStatus />} />
			<Route path="/feedback" element={<Feedback />} />
			<Route path="/all-entries-page" element={<AllEntriesPage />}>
				<Route
					path="/all-entries-page/add-sector"
					element={<AddSector />}
				></Route>
				<Route
					path="/all-entries-page/add-qualification-pack"
					element={<AddQualificationPack />}
				></Route>
				<Route
					path="/all-entries-page/add-nos-pack"
					element={<AddNosPack />}
				></Route>
				<Route
					path="/all-entries-page/add-group"
					element={<AddGroup />}
				></Route>
				<Route
					path="/all-entries-page/add-candidate"
					element={<AddCandidate />}
				></Route>
				<Route
					path="/all-entries-page/add-assessor"
					element={<AddAssessor />}
				></Route>
				<Route
					path="/all-entries-page/add-question-bank"
					element={<AddQuestionBank />}
				></Route>
				<Route
					path="/all-entries-page/add-exam"
					element={<AddExam />}
				></Route>
				<Route
					path="/all-entries-page/add-training-partner"
					element={<AddTrainingPartner />}
				></Route>
				<Route
					path="/all-entries-page/add-training-center"
					element={<AddTrainingCenter />}
				></Route>
				<Route
					path="/all-entries-page/add-scheme-list"
					element={<AddSchemeList />}
				></Route>
				<Route
					path="/all-entries-page/add-scheme-name"
					element={<AddSchemeName />}
				></Route>
				<Route
					path="/all-entries-page/add-sub-scheme"
					element={<AddSubScheme />}
				></Route>
				<Route
					path="/all-entries-page/add-sub-admin"
					element={<AddSubAdmin />}
				></Route>
				<Route
					path="/all-entries-page/add-back-office-subadmin"
					element={<AddBackOfficeSubAdmin />}
				></Route>
				<Route
					path="/all-entries-page/add-feedback"
					element={<AddFeedback />}
				></Route>
				<Route
					path="/all-entries-page/plan-details"
					element={<PlanAndDetails />}
				></Route>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
