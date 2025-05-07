import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

import { unstable_ViewTransition as ViewTransition } from "react";
import DeleteMealButton from "@/components/delete-meal-button";

async function MealPage(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const meal = await prisma.meal.findUnique({
		where: {
			id: params.id,
		},
	});

	if (!meal) {
		notFound();
	}

	return (
		<div className="flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<Link
					href="/dashboard"
					className={cn(
						buttonVariants({ variant: "default", size: "sm" }),
						"self-start",
					)}
				>
					<ArrowLeft /> Go back
				</Link>

				<DeleteMealButton mealId={meal.id} />
			</div>

			<div className="flex flex-col gap-8">
				<div>
					<ViewTransition name={`meal-name-${meal.id}`}>
						<h1 className="text-3xl font-bold">{meal.mealName}</h1>
					</ViewTransition>
					<p className="text-xl text-muted-foreground mt-2">
						{meal.calories} calories
					</p>
				</div>

				<div className="aspect-video relative rounded-lg overflow-hidden">
					<Image
						src={meal.imageSrc}
						alt={meal.mealName}
						fill
						sizes="(max-width: 768px) 100vw, 768px"
						className="object-cover bg-muted rounded-lg border"
						priority
						quality={80}
					/>
				</div>

				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.carbs}g</span>
						<span className="text-sm text-muted-foreground">Carbs</span>
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.protein}g</span>
						<span className="text-sm text-muted-foreground">Protein</span>
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.fat}g</span>
						<span className="text-sm text-muted-foreground">Fat</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MealPage;
