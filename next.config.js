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
				hostname: "digitalhippo-production-f568.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;
