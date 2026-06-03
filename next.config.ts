import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,   // Partial Pre-Rendering (PPR) — Next.js 16
  // typedRoutes enabled in backend phase once all routes are registered
  experimental: {
    useCache: true,
  },
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" }, // dummy data phase
    ],
  },
};

export default nextConfig;
