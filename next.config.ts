import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images as-is from the CDN: no on-demand image optimization functions.
  // Every image in /public is pre-sized and pre-encoded as .webp.
  images: { unoptimized: true },
  // Don't advertise the framework; trims a header from every response.
  poweredByHeader: false,
};

export default nextConfig;
