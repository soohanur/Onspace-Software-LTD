/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export - `npm run build` emits a deployable ./out directory
  output: "export",
};

export default nextConfig;
