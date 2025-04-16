import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

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
			<Link
				href="/dashboard"
				className={cn(
					buttonVariants({ variant: "default", size: "sm" }),
					"self-start",
				)}
			>
				<ArrowLeft /> Wróć
			</Link>

			<div className="flex flex-col gap-8">
				<div>
					<h1 className="text-3xl font-bold">{meal.mealName}</h1>
					<p className="text-xl text-muted-foreground mt-2">
						{meal.calories} kalorii
					</p>
				</div>

				<div className="aspect-video relative rounded-lg overflow-hidden">
					<Image
						src={meal.imageSrc}
						alt={meal.mealName}
						fill
						sizes="(max-width: 768px) 100vw, 768px"
						className="object-cover bg-muted rounded-lg"
						priority
					/>
				</div>

				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.carbs}g</span>
						<span className="text-sm text-muted-foreground">Węglowodany</span>
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.protein}g</span>
						<span className="text-sm text-muted-foreground">Białko</span>
					</div>
					<div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
						<span className="text-2xl font-bold">{meal.fat}g</span>
						<span className="text-sm text-muted-foreground">Tłuszcze</span>
					</div>
				</div>

				<div>
					<h3 className="text-xl font-medium mb-4">Składniki:</h3>
					<ul className="space-y-2">
						{meal.ingredients.map((ingredient, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: Lista składników jest statyczna
							<li key={index} className="text-muted-foreground">
								{ingredient}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MealPage;
