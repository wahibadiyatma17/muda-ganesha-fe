/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3.ap-southeast-3.amazonaws.com'],
  },
};

module.exports = nextConfig;
