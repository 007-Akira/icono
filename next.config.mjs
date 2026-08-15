/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
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
