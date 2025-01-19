/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/resort/' : '',
  basePath: isProd ? '/resort' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;