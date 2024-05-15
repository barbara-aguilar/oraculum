/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dkw5ssdvaqf8l.cloudfront.net', 
        port: '',
      },
    ],
  },
};

export default nextConfig;
