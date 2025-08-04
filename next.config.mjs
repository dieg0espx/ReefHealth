/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/emails/:path*',
        destination: '/api/emails/:path*',
      },
    ];
  },
};

export default nextConfig;
