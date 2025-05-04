import "server-only";

import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const MEALS_CACHE_TAG = "meals";

export const getCachedMeals = async (userId: string) => {
	return unstable_cache(
		async () => {
			const userMeals = await prisma.meal.findMany({
				where: {
					userId: userId,
				},
				orderBy: {
					createdAt: "desc",
				},
			});
			return userMeals;
		},
		[`${MEALS_CACHE_TAG}-${userId}`],
		{ tags: [`${MEALS_CACHE_TAG}-${userId}`] },
	)();
};
