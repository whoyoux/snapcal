"use client";
import type { User } from "better-auth";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

function AuthUser({
	user,
	children,
}: { user: User; children: React.ReactNode }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full">
					<Avatar>
						<AvatarImage src={user.image ?? ""} alt="User avatar" />
						<AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<Link href="/dashboard">
						<DropdownMenuItem>
							Dashboard
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem disabled>
						Billing
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					{/* <DropdownMenuItem disabled>
						Keyboard shortcuts
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem> */}
				</DropdownMenuGroup>

				<DropdownMenuSeparator />
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				{/* <DropdownMenuItem disabled>Support</DropdownMenuItem>
				<DropdownMenuItem disabled>API</DropdownMenuItem> */}
				<DropdownMenuSeparator />
				{children}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default AuthUser;
