"use server";

import { calculateFromImageAi } from "@/lib/ai";
import { authActionClient } from "@/lib/safe-action";
import { compressFile } from "@/lib/sharp";
import { uploadFile } from "@/lib/utapi";
import { UploadImageFormSchema } from "@/schemas/upload-image-schema";

export const calculateCalories = authActionClient
	.schema(UploadImageFormSchema)
	.action(async ({ parsedInput: { image }, ctx: { session } }) => {
		const filename = `${session.user.id}-${crypto.randomUUID()}`;
		const compressedFile = await compressFile(image, filename);

		const uploadResponse = await uploadFile(compressedFile);
		if (!uploadResponse.success) {
			return {
				success: false,
				message: "Couldn't upload file!",
			};
		}

		console.log(`Image public URL: ${uploadResponse.publicFileUrl}`);
		//setTimeout(() => {}, 3000);
	});
