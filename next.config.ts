import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are added for routing consistency on static hosting sites like GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
