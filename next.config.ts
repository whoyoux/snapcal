import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		ppr: true,
		dynamicIO: true,
		serverActions: {
			bodySizeLimit: "10mb",
		},
	},
};

export default nextConfig;
