/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
