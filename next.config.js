/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-backend-domain.com', 'randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig; 