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
				hostname: "digitalhippo-hh17-737bfxid3-ziad-hatem.vercel.app",
			}
		],
	},
};

module.exports = nextConfig;
