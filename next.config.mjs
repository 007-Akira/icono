const developmentScriptPolicy =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  developmentScriptPolicy,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "frame-src https://www.google.com",
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  poweredByHeader: false,
  // OpenNext converts Next.js' standalone server output into a Cloudflare Worker.
  output: "standalone",
  // Allow phones on the current development host to load Next.js client
  // resources. Without this, the page renders but interactive controls never
  // hydrate when it is opened through the LAN address.
  allowedDevOrigins: ["192.168.1.9", "192.168.29.93"],
  // Node 24 can drop captured stdout from Next's detached TypeScript CLI.
  // The compiler API performs the same build-time checking without that issue.
  experimental: { useTypeScriptCli: false },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
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
    // All production photography is already compressed WebP. Serving it as a
    // static asset avoids an extra Worker hop that currently returns the same
    // bytes without resizing them.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/aida-public/**" },
    ],
  },
};

export default nextConfig;
