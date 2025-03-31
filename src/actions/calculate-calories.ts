"use server";

import { authActionClient } from "@/lib/safe-action";
import { UploadImageFormSchema } from "@/schemas/upload-image-schema";

export const calculateCalories = authActionClient
	.schema(UploadImageFormSchema)
	.action(async ({ parsedInput: { image }, ctx: { session } }) => {
		setTimeout(() => {}, 3000);
	});
