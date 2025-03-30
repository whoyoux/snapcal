import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

function Header() {
	return (
		<header className="max-w-screen-md mx-auto py-5 border-b flex items-center justify-between">
			<Link href="/">
				<h1 className="text-lg font-semibold">SnapCal</h1>
			</Link>
			{/* <Button>Sign in</Button> */}
			<Link
				href="/dashboard"
				className={buttonVariants({ variant: "default" })}
			>
				Sign in
			</Link>
		</header>
	);
}

export default Header;
