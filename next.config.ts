import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cesinha',
  assetPrefix: '/cesinha/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
