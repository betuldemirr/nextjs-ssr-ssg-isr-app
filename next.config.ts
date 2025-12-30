import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingExcludes: {
    "*": ["apps/cms/**"],
  },
};

export default nextConfig;
