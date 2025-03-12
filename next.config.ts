import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'resetdigestion.com'
      }
    ]
  },
  experimental: {
    nextScriptWorkers: true,
  },
}

export default nextConfig
