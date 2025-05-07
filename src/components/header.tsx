import Link from "next/link";
import LoginButton from "@/components/ui/login-button";
import AuthUser from "./ui/auth-user";
import getSession from "@/lib/auth-server";
import { Suspense } from "react";
import LogoutButton from "./ui/logout-button";

async function HeaderContent() {
	const session = await getSession();
	return (
		<header className="max-w-screen-md mx-auto py-5 border-b flex items-center justify-between">
			<Link href="/">
				<h1 className="text-lg font-semibold">SnapCal</h1>
			</Link>

			<Suspense fallback={<LoginButton isPending={true} />}>
				{session ? (
					<AuthUser user={session.user}>
						<LogoutButton />
					</AuthUser>
				) : (
					<LoginButton isPending={false} />
				)}
			</Suspense>
		</header>
	);
}

export default function Header() {
	return (
		<Suspense
			fallback={
				<header className="max-w-screen-md mx-auto py-5 border-b flex items-center justify-between">
					<Link href="/">
						<h1 className="text-lg font-semibold">SnapCal</h1>
					</Link>
					<LoginButton isPending={true} />
				</header>
			}
		>
			<HeaderContent />
		</Suspense>
	);
}
