import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';
import { fileURLToPath } from 'node:url';
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ['pino'],
    },
    webpack: (config, { isServer }) => {
      config.externals.push({
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      });

      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(isServer),
          exposes: {
            // Host app also can expose modules
          },
        })
      );

      return config;
    },
  })
);
