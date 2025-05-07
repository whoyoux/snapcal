import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="text-center py-8 border-t">
			<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
				<span>Created by</span>
				<Link
					href="https://whoyoux.com"
					className="text-primary hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					whoyoux
				</Link>
				<span>•</span>
				<Link
					href="https://github.com/whoyoux"
					className="text-primary hover:underline flex items-center gap-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="h-4 w-4" />
					GitHub
				</Link>
			</div>
		</footer>
	);
}
