/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Assuming you are using styled-components
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', // Optional: defaults to standard port if empty
        pathname: '/**', // Optional: defaults to all paths if empty or '/**'
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // As you had before
  },
  eslint: {
    ignoreDuringBuilds: true, // As you had before
  },
  devIndicators: {
    allowedDevOrigins: [
      // Using a wildcard for the port part of the subdomain
      'https://*-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    ],
  },
  reactStrictMode: true, // Recommended for development to catch potential problems
};

module.exports = nextConfig;
