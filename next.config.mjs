/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    BASE_URL: process.env.BASE_URL
  },
};

export default nextConfig;
