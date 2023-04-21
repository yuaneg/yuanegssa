/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://chat.openai.com/:slug*",
      },
    ];
  }
}

module.exports = nextConfig
