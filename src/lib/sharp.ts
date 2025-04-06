import "server-only";

import sharp from "sharp";

export async function compressFile(file: File, filename: string) {
	const buffer = await file.arrayBuffer();
	const compressedBuffer = await sharp(Buffer.from(buffer))
		.jpeg({
			quality: 80,
			progressive: true,
		})
		.toBuffer();
	const compressedFile = new File([compressedBuffer], filename, {
		type: "image/jpeg",
	});
	return compressedFile;
}
