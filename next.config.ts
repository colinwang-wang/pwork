import type { NextConfig } from "next";

const isProd = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/pwork" : "",
  images: { unoptimized: true },
  trailingSlash: true, // 静态导出时确保 /zh/ /en/ 路径正确
};

export default nextConfig;
