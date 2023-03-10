import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  build: {
    sourcemap: true,
    appType: 'custom',
    css: {
      devSourcemap: true
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/scripts/main.ts'),
        styles: path.resolve(__dirname, 'src/scss/styles.scss')
      },
      output: {
        entryFileNames: '[name].bundle.js',
        assetFileNames: '[name]-[hash][extname]'
      }
    }
  },
  plugins: [splitVendorChunkPlugin(), eslint()]
});
