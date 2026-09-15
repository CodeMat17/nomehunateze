import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images as-is from the CDN: no on-demand image optimization functions.
  // The only image is an already-optimized 44KB .webp.
  images: { unoptimized: true },
  // Don't advertise the framework; trims a header from every response.
  poweredByHeader: false,
};

export default nextConfig;
