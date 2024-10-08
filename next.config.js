/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['tiptap'])
module.exports = withTM({
  // your next config
})
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
