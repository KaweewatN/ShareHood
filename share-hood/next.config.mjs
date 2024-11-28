/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akyhdqpvcjxjnywijaoj.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
