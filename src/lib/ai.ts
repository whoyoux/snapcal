import "server-only";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export const calculateFromImageAi = async (file?: File) => {
	const { text } = await generateText({
		model: openai("o3-mini"),
		prompt:
			"Can you extract a ingridients from a meal photo that i'm gonna provide to you and them calculate calories, carbs, fat etc?",
	});

	return { text };
};
