import "server-only";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

import { z } from "zod";

const nutritionSchema = z.object({
	mealName: z.string(),
	calories: z.number(),
	carbs: z.number(),
	protein: z.number(),
	fat: z.number(),
	ingredients: z.array(z.string()),
});

type NutritionInfo = z.infer<typeof nutritionSchema>;
type calculateFromImageAiResponse =
	| {
			success: true;
			data: NutritionInfo;
	  }
	| {
			success: false;
			message: string;
	  };

export const calculateFromImageAi = async (
	imageUrl: string,
): Promise<calculateFromImageAiResponse> => {
	try {
		const data = await generateObject({
			model: openai("gpt-4o-mini"),
			schema: nutritionSchema,
			messages: [
				{
					role: "system",
					content:
						"You are a nutrition analysis expert. Analyze meal photos and provide an accurate estimate of the nutritional values based on typical food data. Include total calories, carbohydrates, protein, fat, and a list of ingredients. Make your estimates based on the visible components, portion sizes, and common nutritional databases. If the image is unclear, mention the level of uncertainty.",
				},
				{
					role: "user",
					content: [
						{
							type: "text",
							text: "Analyze this meal photo and provide its nutritional values.",
						},
						{
							type: "image",
							image: imageUrl,
						},
					],
				},
			],
		});

		return {
			success: true,
			data: data.object,
		};
	} catch (err) {
		console.log(`[AI ERROR]: ${err}`);
		return {
			success: false,
			message: (err as Error).message,
		};
	}
};
