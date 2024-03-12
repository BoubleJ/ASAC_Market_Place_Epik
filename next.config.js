/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

const nextConfig = {
  reactStrictMode: false,
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
        // destination: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/:path*`,
        destination: 'http://43.201.51.181:8080/api/:path*',
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
    formats: ['image/avif', 'image/webp'],
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
      {
        protocol: 'https',
        hostname: 'asac-marketplace-s3.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
