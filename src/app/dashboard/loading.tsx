import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

function DashboardLoading() {
	return (
		<div className="flex flex-col gap-4">
			<div className="w-full flex justify-between items-center">
				<Skeleton className="h-6 w-32" />
				<Button disabled>Calculate from image</Button>
			</div>

			{/* Skeleton dla 3 przykładowych posiłków */}
			{[1, 2, 3].map((index) => (
				<div
					className="p-5 border rounded-lg w-full flex items-center justify-between gap-4"
					key={index}
				>
					<div className="flex items-center gap-4">
						<Skeleton className="size-[50px] rounded-md" />
						<Skeleton className="h-5 w-48" />
					</div>
					<div className="flex items-center gap-4">
						<Skeleton className="h-5 w-24 hidden md:block" />
						<Skeleton className="h-9 w-16" />
					</div>
				</div>
			))}
		</div>
	);
}

export default DashboardLoading;
