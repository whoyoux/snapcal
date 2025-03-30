"use client";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function LoginButton({ isPending }: { isPending: boolean }) {
	const login = async () => {
		const { error } = await signIn.social({
			provider: "discord",
			callbackURL: "/",
		});

		if (error) {
			//TODO: Send error to error reporting service
			console.error(error);
			toast.error(error.message || "An error occurred");
		}
	};
	return (
		<Button onClick={async () => await login()} disabled={isPending}>
			Sign in
		</Button>
	);
}

export default LoginButton;
