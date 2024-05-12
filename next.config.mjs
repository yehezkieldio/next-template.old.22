await import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ideally, we should lint and type-check the code on a CI/CD pipeline.
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
