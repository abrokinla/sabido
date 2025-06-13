import type {NextConfig} from 'next';
const { withNetlify } = require('@netlify/next');
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output:"export",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
