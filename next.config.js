/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["firebasestorage.googleapis.com"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/", query: { __nextDefaultLocale: "en" } },
      "/home": { page: "/", query: { __nextDefaultLocale: "en" } },
      "/about": { page: "/about", query: { __nextDefaultLocale: "en" } },
      "/speakers": { page: "/speakers", query: { __nextDefaultLocale: "en" } },
      "/sponsors": { page: "/sponsors", query: { __nextDefaultLocale: "en" } },
      "/speakers": { page: "/speakers", query: { __nextDefaultLocale: "en" } },
      "/campaigns": {
        page: "/campaigns",
        query: { __nextDefaultLocale: "en" },
      },
    };
  },
};

module.exports = nextConfig;
