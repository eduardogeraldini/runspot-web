/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.corridaderuasuperacao.com.br',
                port: '',
                pathname: '/eventos/**',
            },
        ],
    }
};

export default nextConfig;
