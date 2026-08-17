/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  // Allow phones on the current development host to load Next.js client
  // resources. Without this, the page renders but interactive controls never
  // hydrate when it is opened through the LAN address.
  allowedDevOrigins: ["192.168.1.9"],
  async redirects() {
    return [
      { source: "/services/skin", destination: "/services/skin-facial", permanent: true },
      { source: "/services/bridal", destination: "/services/bridal-makeup", permanent: true },
      {
        source: "/services/speciality-services",
        destination: "/services/speciality",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/aida-public/**" },
    ],
  },
};

export default nextConfig;
