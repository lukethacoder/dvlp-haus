/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/font-converter',
        destination: '/tools/font-converter',
        permanent: true,
      },
      {
        source: '/svg-to-css',
        destination: '/tools/svg-to-base64',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
