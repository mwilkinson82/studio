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
    'http://localhost:3001',  // New dev port
    'http://localhost:3000',  // Common default, good to keep if sometimes used
    // Firebase Studio preview URLs
    'https://9000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'http://9000-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    // If Studio preview URL might also use port 3001 directly
    'https://3001-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    'http://3001-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
    // Keep the wildcard from previous config just in case, though you noted exact strings are preferred
    'https://*-firebase-studio-1748033890974.cluster-pb4ljhlmg5hqsxnzpc56r3prxw.cloudworkstations.dev',
  ],
};

module.exports = nextConfig;