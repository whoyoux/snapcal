"use server";

import { MEALS_CACHE_TAG } from "@/data-layer/meal.data-layer";
import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { DeleteMealSchema } from "@/schemas/meal-schema";
import { revalidateTag } from "next/cache";

export const deleteMealAction = authActionClient
	.schema(DeleteMealSchema)
	.action(async ({ parsedInput: { mealId }, ctx: { session } }) => {
		try {
			const meal = await prisma.meal.delete({
				where: {
					id: mealId,
					userId: session.user.id,
				},
			});

			if (!meal) {
				return {
					success: false,
					message: "Could not remove meal. Please try again later.",
				};
			}

			revalidateTag(`${MEALS_CACHE_TAG}-${session.user.id}`);

			return {
				success: true,
				message: "Meal removed.",
			};
		} catch (err) {
			console.error(`[SERVER API ERROR]: ${err}`);
			return {
				success: false,
				message: "Could not remove meal. Please try again later.",
			};
		}
	});
