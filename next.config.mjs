/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'sequelize-typescript'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
