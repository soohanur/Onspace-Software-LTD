/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export - `npm run build` emits a deployable ./out directory
  output: "export",
  // Emit each route as <route>/index.html so direct loads / reloads of inner
  // pages resolve on any static host (avoids 403/404 on refresh).
  trailingSlash: true,
};

export default nextConfig;
