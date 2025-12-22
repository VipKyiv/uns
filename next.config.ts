import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

/** @type {import('next'.NextConfig)} */
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
// module.exports = {
//   allowedDevOrigins: ['*.localhost:3500', '*.localhost:3000'],
// }
export default withNextVideo(nextConfig, { folder: 'y' });