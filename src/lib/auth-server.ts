import "server-only";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function getSession() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return session;
}
