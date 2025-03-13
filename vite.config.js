import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true,
    outDir: 'public/assets/scripts',
    target: 'es2020',
    terserOptions: {
      mangle: false,
    },
    rollupOptions: {
      input: {
        app: 'src/assets/scripts/app.js'
      },
      output: {
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    },
    emptyOutDir: false,
  },
  publicDir: false
});