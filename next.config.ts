import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-2.0",
  images: {
    loader: "custom",
    loaderFile: "./src/app/image-loader.ts",
    domains: ['images.unsplash.com', 'assets.aceternity.com', 'cdn-images-1.medium.com', 'medium.com'],
  },
};

export default nextConfig;
