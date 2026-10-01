import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inlined at build time so /api/health reports exactly which commit is live
  env: { COMMIT_SHA: process.env.COMMIT_SHA ?? "local" },
};

export default nextConfig;
