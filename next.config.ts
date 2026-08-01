import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath dynamically: empty string in local development, '/portfolio' in production deployment
  basePath: isProd ? "/portfolio" : undefined,
  assetPrefix: isProd ? "/portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are added for routing consistency on static hosting sites like GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
