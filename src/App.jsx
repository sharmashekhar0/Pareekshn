import AboutPareekshn from "./components/AboutPareekshn";
import Instruction from "./components/Instruction";
import CandidatePage from "./pages/CandidatePage";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./components/SignUp";
import SignUpPage from "./pages/SignUpPage";
import CandidatePageTwo from "./pages/CandidatePageTwo";
import SubjectiveQuestion from "./pages/SubjectiveQuestion";
import Dashboard from "./pages/Dashboard";
import CorporateHackathonDashboard from "./pages/Hackathon/CorporateHackathonDashboard";
import CorporateSignUp from "./components/Hackathon/CorporateSignUp";
import CorporateHackathonDashboard1 from "./components/Hackathon/CorporateHackathonDashboard1";
import CorporateHackathonDashboard2 from "./components/Hackathon/CorporateHackathonDashboard2";
import DashboardCorporateProfile from "./components/Hackathon/DashboardCorporateProfile";
import NextHackathon from "./components/Hackathon/NextHackathon";
import PendingHackathon from "./components/Hackathon/PendingHackathon";
import RejectedHackathon from "./components/Hackathon/RejectedHackathon";
import CompletedHackathon from "./components/Hackathon/CompletedHackathon";
import CorporateHackathonDashboard3 from "./components/Hackathon/CorporateHackathonDashboard3";
import Header from "./components/Assessor/Header";
import UploadPhoto from "./pages/Assessor/UploadPhoto";
import ExamList from "./pages/Assessor/ExamList";
import AssessorDashboard from "./pages/Assessor/AssessorDashboard";
import VivaPractical from "./pages/Assessor/VivaPractical";
import InstructionAssessor from "./pages/Assessor/Instruction";
import VivaByAssessor from "./pages/Assessor/VivaByAssessor";
import QuestionStatus from "./pages/Assessor/QuestionStatus";
import Feedback from "./pages/Assessor/Feedback";
import LiveVideo from "./components/Exams/LiveVideo";
import VideoQuestion from "./components/Exams/VideoQuestion";
import ExamFeeDetailsPage from "./pages/Dashboard/ExamFeeDetailsPage";
import AllEntriesPage from "./pages/AdminPanel/AllEntriesPage";
import Screens from "./pages/Screens/Screens";
import { Outlet } from "react-router";

function App() {
	return (
		<div className="font-custom">
			{/* <CandidatePage /> */}
			{/* <LoginScreen /> */}
			{/* <AboutPareekshn /> */}
			{/* <SignUp /> */}
			{/* <SignUpPage /> */}
			{/* <Instruction /> */}
			{/* <CandidatePageTwo /> */}
			{/* <SubjectiveQuestion /> */}
			{/* <Dashboard /> */}
			{/* <CorporateHackathonDashboard /> */}
			{/* <CorporateSignUp /> */}
			{/* <CorporateHackathonDashboard1 /> */}
			{/* <CorporateHackathonDashboard2 /> */}
			{/* <DashboardCorporateProfile /> */}
			{/* <NextHackathon /> */}
			{/* <PendingHackathon /> */}
			{/* <RejectedHackathon /> */}
			{/* <CompletedHackathon /> */}
			{/* <CorporateHackathonDashboard3 /> */}
			{/* <ProgressBar /> */}
			{/* <Header /> */}
			{/* <UploadPhoto /> */}
			{/* <ExamList /> */}
			{/* <AssessorDashboard /> */}
			{/* <VivaPractical /> */}
			{/* <InstructionAssessor /> */}
			{/* <VivaByAssessor /> */}
			{/* <QuestionStatus /> */}
			{/* <Feedback /> */}
			{/* <LiveVideo /> */}
			{/* <VideoQuestion /> */}
			{/* <ExamFeeDetailsPage /> */}
			{/* <Dashboard /> */}
			{/* <CorporateHackathonDashboard1 /> */}
			{/* <AllEntriesPage /> */}
			<Outlet />
		</div>
	);
}

export default App;
