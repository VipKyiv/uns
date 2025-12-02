import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export'
};

export default withNextVideo(nextConfig, { folder: 'y' });