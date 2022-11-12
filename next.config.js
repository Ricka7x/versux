/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/join/:id',
        destination: '/',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
