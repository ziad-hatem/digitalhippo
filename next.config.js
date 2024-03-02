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
			{
								protocol: "https",
				hostname:process.env.NEXT_PUBLIC_VERCEL_UR`,
			}
		],
	},
};

module.exports = nextConfig;
