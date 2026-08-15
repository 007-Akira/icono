/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/aida-public/**" }],
  },
};

export default nextConfig;
