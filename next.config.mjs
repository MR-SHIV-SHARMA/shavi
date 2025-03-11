/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true, // Strict mode on (optional)
  experimental: {
    appDir: true, // App Router (for Next.js 14+)
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // 1 सेकंड में एक बार चेक करेगा
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
