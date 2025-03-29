import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply for all routes
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};


export default nextConfig;
