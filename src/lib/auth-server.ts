import "server-only";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";

export default async function getSession() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return session;
}

export const getCachedSession = cache(getSession);
