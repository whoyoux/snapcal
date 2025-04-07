"use client";

import Link from "next/link";
import LoginButton from "@/components/ui/login-button";
import { useSession } from "@/lib/auth-client";
import AuthUser from "./ui/auth-user";

function Header() {
	const { isPending, data: session } = useSession();
	return (
		<header className="max-w-screen-md mx-auto py-5 border-b flex items-center justify-between">
			<Link href="/">
				<h1 className="text-lg font-semibold">SnapCal</h1>
			</Link>
			{session ? (
				<AuthUser user={session.user} />
			) : (
				<LoginButton isPending={isPending} />
			)}
		</header>
	);
}

export default Header;
