//import UploadImageCard from "@/components/upload-image-card";
import UploadImageDialog from "@/components/upload-image-dialog";
import getSession from "@/lib/auth-server";
import Image from "next/image";
import { redirect } from "next/navigation";

import placeholderImage from "@/assets/placeholder.webp";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function Dashboard() {
	const session = await getSession();
	if (!session) {
		return redirect("/");
	}

	const userMeals = await prisma.meal.findMany({
		where: {
			userId: session.user.id,
		},
	});

	return (
		<div className="flex flex-col gap-4">
			<div className="w-full flex justify-between items-center">
				<h2 className="font-medium">Your recent meals</h2>
				<UploadImageDialog />
			</div>
			<div className="flex flex-col gap-4">
				{userMeals.length === 0 && (
					<div className="p-5 border rounded-lg w-full flex items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<Image
								src={placeholderImage}
								alt="placeholder"
								width={50}
								height={50}
								className="rounded-md object-cover"
							/>
							<h3 className="truncate">Chicken nuggets with french fries</h3>
						</div>
						<div className="flex items-center gap-4">
							<span className="hidden md:block">560 calories</span>
							{/* <Button size="sm">See</Button> */}
							<Link
								href="/meal/1"
								className={buttonVariants({ variant: "default", size: "sm" })}
							>
								See
							</Link>
						</div>
					</div>
				)}

				{userMeals.map((meal) => (
					<div
						className="p-5 border rounded-lg w-full flex items-center justify-between gap-4"
						key={meal.id}
					>
						<div className="flex items-center gap-4">
							<Image
								src={meal.imageSrc}
								alt={meal.mealName}
								width={50}
								height={50}
								className="rounded-md object-cover"
							/>
							<h3 className="truncate">{meal.mealName}</h3>
						</div>
						<div className="flex items-center gap-4">
							<span className="hidden md:block">{meal.calories} calories</span>
							<Link
								href={`/meal/${meal.id}`}
								className={buttonVariants({ variant: "default", size: "sm" })}
							>
								See
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Dashboard;
