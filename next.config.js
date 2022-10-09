/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['firebasestorage.googleapis.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/admin': { page: '/admin' },
      '/sponsors': { page: '/sponsors' },
      '/speakers': { page: '/speakers' },
    }
  },
}


module.exports = nextConfig
