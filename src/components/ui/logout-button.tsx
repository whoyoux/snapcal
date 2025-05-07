import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
	DropdownMenuItem,
	DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

export default async function LogoutButton() {
	async function signOutAction() {
		"use server";

		await auth.api.signOut({
			headers: await headers(),
		});

		redirect("/");
	}

	return (
		<form action={signOutAction}>
			<DropdownMenuItem asChild>
				<button type="submit" className="w-full text-left">
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</button>
			</DropdownMenuItem>
		</form>
	);
}
