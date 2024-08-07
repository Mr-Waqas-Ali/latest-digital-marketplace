/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "latest-digital-marketplace.vercel.app",
			},
		],
	},
	productionBrowserSourceMaps: true, // Enable detailed error reporting in production
};

module.exports = nextConfig;
