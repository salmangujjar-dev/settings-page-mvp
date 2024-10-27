import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? true : false,
},
};

export default nextConfig;
