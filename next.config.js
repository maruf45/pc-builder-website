/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "cdn.gaminggorilla.com",
      "encrypted-tbn0.gstatic.com",
      "www.cloud.ryanscomputers.com",
      "image.made-in-china.com",
      "www.techlandbd.com",
      "creatuscomputer.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
