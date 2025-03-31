import UploadImageCard from "@/components/upload-image-card";
import getSession from "@/lib/auth-server";
import { redirect } from "next/navigation";

async function Dashboard() {
	const session = await getSession();
	if (!session) {
		return redirect("/");
	}
	return (
		<div>
			<UploadImageCard />
		</div>
	);
}

export default Dashboard;
