import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pwork",
  images: { unoptimized: true },
};

export default nextConfig;
