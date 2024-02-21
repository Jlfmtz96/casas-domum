/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'freebw.com'
        }
    ]
    }
};

export default nextConfig;
