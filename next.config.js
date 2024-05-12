/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
