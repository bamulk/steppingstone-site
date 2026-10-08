/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [] },
  // Addresses from the previous WordPress site
  async redirects() {
    return [
      { source: "/news-and-events", destination: "/about", permanent: true },
      { source: "/news-and-events/:path*", destination: "/about", permanent: true },
      { source: "/stepping-stone-sober-living", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
