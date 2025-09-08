import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https: data:; connect-src 'self' https:; frame-ancestors 'self';",
  },
  {
    key: "X-Frame-Options",
    value: "DENY", // Prevents clickjacking
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff", // Prevents MIME-sniffing
  },
  // {
  //   key: "Referrer-Policy",
  //   value: "strict-origin-when-cross-origin",
  // },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=()", // Disable FLoC & restrict APIs
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload", // Enforce HTTPS
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build
  },
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // {
      //   source: "/blog",
      //   destination: "/", // Change to your desired landing page
      //   permanent: true,  // 308 redirect, cached by browsers & search engines
      // },
      // {
      //   source: "/hire",
      //   destination: "/", // Or /404 if you want a not-found page
      //   permanent: true,
      // },
      // {
      //   source: "/hire/:path*",
      //   destination: "/", // Or /404 if you want a not-found page
      //   permanent: true,
      // }
    ];
  },
  // async rewrites() {
  //   return [
  //     // Catch-all rewrite to index for SPA-style routing
  //     {
  //       source: "/:path*",
  //       destination: "/", // Or /404 if you want a not-found page
  //     },
  //   ];
  // },
};

export default nextConfig;
