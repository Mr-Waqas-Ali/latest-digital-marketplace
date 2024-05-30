/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
	
			{
				protocol: "https",
				hostname: "latest-digital-marketplace.vercel.app",
			},
		],
	},
};

module.exports = nextConfig;
