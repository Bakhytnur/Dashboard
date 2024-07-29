/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "render.fineartamerica.com"
            }
        ]
    }
};

export default nextConfig;
