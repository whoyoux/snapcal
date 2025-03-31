import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		ppr: true,
		serverActions: {
			bodySizeLimit: "6mb",
		},
	},
};

export default nextConfig;
