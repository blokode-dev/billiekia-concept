import type { NextConfig } from "next";

const securityHeaders = [
  // Empêche le clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Bloque le sniffing MIME
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Force HTTPS pendant 1 an (activer en prod avec vrai domaine HTTPS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Politique de référent
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive les permissions du navigateur non nécessaires
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy — autorise uniquement nos ressources
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval requis par Next.js dev
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  // Désactive XSS auditor (obsolète mais inoffensif)
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  // Headers de sécurité sur toutes les routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Optimisation images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    qualities: [75, 85],
  },

  // Compression
  compress: true,

  // Supprime le header "X-Powered-By: Next.js"
  poweredByHeader: false,
};

export default nextConfig;
