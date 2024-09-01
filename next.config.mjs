/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
