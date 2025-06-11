/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true, // Use false if you want this to be temporary
      },
    ];
  },
};

export default nextConfig;
