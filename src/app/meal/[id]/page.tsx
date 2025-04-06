import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function MealPage() {
	return (
		<>
			<Link
				href="/dashboard"
				className={cn(
					buttonVariants({ variant: "default", size: "sm" }),
					"mb-4",
				)}
			>
				<ArrowLeft /> Go back
			</Link>
			<div>MealPage</div>
		</>
	);
}

export default MealPage;
