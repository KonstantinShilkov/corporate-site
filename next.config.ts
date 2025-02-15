import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", 
  images: {
    unoptimized: true, 
  },
  assetPrefix: "/ddp/",
  basePath: "/ddp"
};

export default nextConfig;
