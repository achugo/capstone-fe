/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "offer-images.api.edeka",
      "img.rewe-static.de",
      "offer-images.api.edeka",
      "offer-images.api.edeka",
      "www.aldi-nord.de",
    ],
  },
};

module.exports = nextConfig;
