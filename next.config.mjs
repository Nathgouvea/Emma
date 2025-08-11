/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined,
};

export default nextConfig;
