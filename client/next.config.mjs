/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-inventory-management-carsonh19.s3.amazonaws.com",
        port: "",
        pathName: "/**",
      }
    ]
  }
};

export default nextConfig;
