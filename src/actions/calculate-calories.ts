"use server";

import { calculateFromImageAi } from "@/lib/ai";
import { authActionClient } from "@/lib/safe-action";
import { UploadImageFormSchema } from "@/schemas/upload-image-schema";

export const calculateCalories = authActionClient
	.schema(UploadImageFormSchema)
	.action(async ({ parsedInput: { image }, ctx: { session } }) => {
		const text = await calculateFromImageAi();
		console.log(text);
		return text;
	});
