/** @type {import('next').NextConfig} */

import path from 'path'; // Importa el módulo path
import { fileURLToPath } from 'url';

// Obtén el equivalente de __dirname en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
