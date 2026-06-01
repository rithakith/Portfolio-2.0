import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-2.0",
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'assets.aceternity.com', 'cdn-images-1.medium.com', 'medium.com'],
  },
};

export default nextConfig;
