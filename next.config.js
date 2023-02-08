/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['https://www.panaverse.co'],
    },
};

module.exports = nextConfig;

