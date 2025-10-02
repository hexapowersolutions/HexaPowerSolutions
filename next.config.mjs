/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', 
  basePath: '/HexaPowerSolutions',  // repo name for GitHub Pages
  assetPrefix: '/HexaPowerSolutions/',
}

export default nextConfig
