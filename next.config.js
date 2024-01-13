/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  images: {
    remotePatterns: ["https://lh3.googleusercontent.com*"],
  }, */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
    ],
  },
};
module.exports = nextConfig;
