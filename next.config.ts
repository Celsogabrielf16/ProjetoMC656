import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },

};

export default nextConfig;
