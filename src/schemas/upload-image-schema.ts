import { zfd } from "zod-form-data";
import { z } from "zod";

import { ACCEPT_UPLOAD_IMAGE_TYPES, MAX_UPLOAD_IMAGE_SIZE } from "@/app/config";

export const UploadImageFormSchema = zfd.formData({
	image: zfd.file(
		z
			.instanceof(File, { message: "Please select a file" })
			.refine(
				(file) => file.size <= MAX_UPLOAD_IMAGE_SIZE,
				"File size must be less than 5MB",
			)
			.refine(
				(file) => ACCEPT_UPLOAD_IMAGE_TYPES.includes(file.type),
				"Only .jpg, .png and formats are supported",
			),
	),
});
