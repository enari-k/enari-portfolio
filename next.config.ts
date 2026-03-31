import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    minimumCacheTTL: 31536000, // 1年間キャッシュを保持
  },
}
module.exports = {
  async headers() {
    return [
      {
        source: '/icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
export default nextConfig;
