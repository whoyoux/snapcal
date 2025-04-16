import "server-only";

import { UTApi } from "uploadthing/server";
const utapi = new UTApi({ logLevel: "Fatal" });

type UploadFileResponse =
	| {
			success: true;
			publicFileUrl: string;
	  }
	| {
			success: false;
			message: string;
	  };

export const uploadFile = async (file: File): Promise<UploadFileResponse> => {
	const res = await utapi.uploadFiles(file);

	if (res.error) {
		console.log("[Upload File] ERROR! Response: ", res);
		return {
			success: false,
			message: "Upload file error",
		};
	}

	return {
		success: true,
		publicFileUrl: res.data.ufsUrl,
	};
};
