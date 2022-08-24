/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
      '/sponsors': { page: '/sponsors' },
      '/speakers': { page: '/speakers' },
    }
  },
}


module.exports = nextConfig
