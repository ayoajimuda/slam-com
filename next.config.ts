import type { NextConfig } from "next";
import withSerwistInit from '@serwist/next'

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.jsx',          // your service worker source
  swDest: 'public/sw.js',      // where the built worker goes
  disable: process.env.NODE_ENV === 'development', // avoids stale-cache confusion while developing
})

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

export default withSerwist({
  
})