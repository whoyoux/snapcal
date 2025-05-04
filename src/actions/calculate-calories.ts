"use server";

import { MEALS_CACHE_TAG } from "@/data-layer/meal.data-layer";
import { calculateFromImageAi } from "@/lib/ai";
import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { compressFile } from "@/lib/sharp";
import { uploadFile } from "@/lib/utapi";
import { UploadImageFormSchema } from "@/schemas/upload-image-schema";
import { revalidateTag } from "next/cache";

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

		const aiResponse = await calculateFromImageAi(uploadResponse.publicFileUrl);

		if (!aiResponse.success) {
			return {
				success: false,
				message: "An error has occured. Please try again later!",
			};
		}

		const nutritions = aiResponse.data;
		console.log(nutritions);

		const dbResponse = await prisma.meal.create({
			data: {
				...nutritions,
				imageSrc: uploadResponse.publicFileUrl,
				user: {
					connect: {
						id: session.user.id,
					},
				},
			},
		});

		if (!dbResponse) {
			console.log("[DB ERROR] Can not create a meal record!");
			return {
				success: false,
				message: "An error has occured. Please try again later!",
			};
		}

		revalidateTag(`${MEALS_CACHE_TAG}-${session.user.id}`);

		return {
			success: true,
			mealId: dbResponse.id,
		};
	});
