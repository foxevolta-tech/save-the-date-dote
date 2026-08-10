/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Garantit que data/guests.json est bien inclus dans le bundle des
  // fonctions serverless quand le stockage Upstash n'est pas configuré
  // (mode fichier JSON local, cf. lib/store.js).
  experimental: {
    outputFileTracingIncludes: {
      "/api/**/*": ["./data/**"],
      "/invite/**/*": ["./data/**"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
