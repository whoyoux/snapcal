import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		ppr: true,
		dynamicIO: true,
		viewTransition: true,
		serverActions: {
			bodySizeLimit: "10mb",
		},
		staleTimes: {
			dynamic: 60,
		},
	},
	images: {
		remotePatterns: [
			{
				hostname: "k4baa866nr.ufs.sh",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
