import "server-only";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

import { z } from "zod";

const nutritionSchema = z.object({
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
						"Jesteś ekspertem od analizy wartości odżywczych. Analizuj zdjęcia posiłków i podawaj dokładne informacje o kaloriach, węglowodanach, białku, tłuszczach oraz składnikach.",
				},
				{
					role: "user",
					content: [
						{
							type: "text",
							text: "Przeanalizuj to zdjęcie posiłku i podaj wartości odżywcze.",
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
		return {
			success: false,
			message: (err as Error).message,
		};
	}
};
