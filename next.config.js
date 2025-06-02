/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
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
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://localhost:3001',  // Default local dev port from package.json
    'http://localhost:3000',
    // Firebase Studio preview URLs - ensure the one that works is listed
    'https://6000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'http://6000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    // Keep others just in case configuration changes or for different access methods
    'https://9000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'http://9000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'https://3001-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'http://3001-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'https://*-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
  ],
};

module.exports = nextConfig;