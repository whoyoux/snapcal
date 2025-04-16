import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingMealPage() {
	return (
		<div className="flex flex-col gap-8">
			<Link
				href="/dashboard"
				className={cn(
					buttonVariants({ variant: "default", size: "sm" }),
					"self-start",
				)}
			>
				<ArrowLeft /> Go back
			</Link>

			<div className="flex flex-col gap-8">
				<div>
					<Skeleton className="h-9 w-64" />
					<Skeleton className="h-6 w-32 mt-2" />
				</div>

				<Skeleton className="aspect-video w-full rounded-lg" />

				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<Skeleton className="h-8 w-12" />
						<Skeleton className="h-4 w-20 mt-1" />
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<Skeleton className="h-8 w-12" />
						<Skeleton className="h-4 w-16 mt-1" />
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<Skeleton className="h-8 w-12" />
						<Skeleton className="h-4 w-16 mt-1" />
					</div>
				</div>

				<div>
					<Skeleton className="h-7 w-32 mb-4" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-2/3" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoadingMealPage;
