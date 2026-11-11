/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [] },
  // Addresses from the previous WordPress site
  async redirects() {
    return [
      { source: "/news-and-events", destination: "/news", permanent: true },
      { source: "/news-and-events/:path*", destination: "/news", permanent: true },
      { source: "/recovery-happens-at-the-state-capitol", destination: "/news/recovery-happens-at-the-state-capitol", permanent: true },
      { source: "/why-choose-sober-living-the-benefits-of-stepping-stone-sober-living-in-sacramento", destination: "/news/why-choose-sober-living", permanent: true },
      { source: "/stepping-stone-sober-living", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
