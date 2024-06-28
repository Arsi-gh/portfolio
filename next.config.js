/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionSourceMap: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
