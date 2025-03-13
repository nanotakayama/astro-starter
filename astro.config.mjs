import { defineConfig } from "astro/config";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import indexPages from './src/astro-index-pages.ts';
import htmlBeautifier from 'astro-html-beautifier';
import relativeLinks from 'astro-relative-links';
import playformCompress from '@playform/compress';

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  integrations: [
    indexPages(),
    htmlBeautifier(),
    relativeLinks(),
    playformCompress({
      CSS: false,
      HTML: false,
      JavaScript: false,
    }),
  ],
  publicDir: 'true',
  outDir: './public',
  build: {
    format: 'file',
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      minify: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const {name} = assetInfo
            if (/\.(jpe?g|png|gif|svg|xml|ico)$/.test(name ?? '')) {
              return 'assets/images/[name][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/styles/app[extname]';
            }
            return 'assets/[name][extname]';
          }
        },
      },
      compressHTML: false,
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/images/*",
            dest: "assets/images",
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "src/assets/styles/_global.scss" as *;
          `,
        }
      }
    }
  },
});