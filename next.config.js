/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "http",
				hostname: "664b38d1a3827c7551c91359--polite-semifreddo-dd7aaf.netlify.app",
			},
		],
	},
};

module.exports = nextConfig;
