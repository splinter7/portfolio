import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // 85 is used for project screenshots (fine UI text needs more than the
    // default 75 to stay crisp); 75 stays available as the default.
    qualities: [75, 85],
  },
};

export default nextConfig;
