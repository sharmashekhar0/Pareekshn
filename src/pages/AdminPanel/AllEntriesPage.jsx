import React from "react";
import CorporateHackathonSidebar from "../../components/CorporateHackathonSidebar";
import AllEntries from "../../components/AdminPanel/AllEntries";

function AllEntriesPage() {
	return (
		<div className="flex">
			<CorporateHackathonSidebar />
			<AllEntries />
		</div>
	);
}

export default AllEntriesPage;
