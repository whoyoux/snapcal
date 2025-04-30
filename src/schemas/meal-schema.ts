import { z } from "zod";

export const DeleteMealSchema = z.object({
	mealId: z.string().min(1),
});
