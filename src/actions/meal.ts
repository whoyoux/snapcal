"use server";

import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { DeleteMealSchema } from "@/schemas/meal-schema";

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
