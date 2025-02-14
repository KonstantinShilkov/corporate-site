import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", 
  basePath: "/ddp", 
  images: {
    unoptimized: true, 
  },
  assetPrefix: "/ddp/",
};

export default nextConfig;
