module.exports = {
    output: 'export',
	images: {
        unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailwindui.com',
			},
			{
				protocol: 'https',
				hostname: 's.gravatar.com',
			},
			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
			},
		],
		dangerouslyAllowSVG: true,
	},
};
