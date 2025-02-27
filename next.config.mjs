/** @type {import('next').NextConfig} */

import path from 'path'; // Importa el módulo path

const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'freebw.com'
        }
    ]
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
};

export default nextConfig;
