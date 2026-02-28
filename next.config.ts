import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Ensure Prisma works correctly in serverless environment
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
