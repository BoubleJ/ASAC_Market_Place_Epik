/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // enabled: true,
  enabled: false,
  openAnalyzer: true,
})

const nextConfig = withBundleAnalyzer({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            typescript: true,
            expandProps: 'end',
            svgo: false,
          },
        },
      ],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/local/api/:path*',
        destination: 'http://43.201.27.83:8080/api/:path*',
        // destination: 'http://localhost:8080/api/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recommendations',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'http',
        hostname: 'example.com',
      },
      {
        protocol: 'http',
        hostname: 'myshop.com',
      },
      {
        protocol: 'http',
        hostname: 'sales.com',
      },
    ],
  },
})

module.exports = nextConfig
