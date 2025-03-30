import { Button } from "./ui/button";

function Header() {
	return (
		<header className="max-w-screen-md mx-auto py-5 border-b flex items-center justify-between">
			<h1 className="text-lg font-semibold">SnapCal</h1>
			<Button>Sign in</Button>
		</header>
	);
}

export default Header;
