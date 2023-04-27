const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isProd ? "/iconsans" : undefined,
  assetPrefix: isProd ? "/iconsans" : undefined,
};

export default nextConfig;
