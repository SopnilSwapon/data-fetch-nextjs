/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async () => {
        return [
            {
                source: '/about',
                destination: '/meals',
                permanent: true,
              },
        ]
    }
};

export default nextConfig;
