const { env } = require("process");
console.info("nextconfig,env:", env.NODE_ENV);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: env.NODE_ENV === "development" ? false : true,
  output: "standalone",
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { typescript: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
