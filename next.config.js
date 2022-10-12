const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: [
      // For debugging images
      'source.unsplash.com',
      'zora-dev.mypinata.cloud',
    ],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts)?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.(md|mdx)?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    })
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    })
    return config
  },
}

module.exports = withVanillaExtract(nextConfig)
