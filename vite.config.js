import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import viteImagemin from 'vite-plugin-imagemin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import config from './config';
import rollupPluginHandlebars from './.toolkit/rollup-plugin-handlebars';

export default defineConfig({
  build: {
    sourcemap: true,
    appType: 'custom',
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [autoprefixer({})]
      }
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'main.js'),
        styles: path.resolve(
          __dirname,
          config.dir.paths.srcStyles,
          'styles.scss'
        )
      },
      output: {
        entryFileNames: 'scripts/[name].bundle.js',
        chunkFileNames: 'scripts/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]';
          }

          return '[name]-[hash][extname]';
        }
      }
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    eslint(),
    stylelint(),
    viteImagemin({
      gifsicle: {
        interlaced: true
      },
      optipng: {
        optimizationLevel: 5
      },
      mozjpeg: {
        quality: 85,
        progressive: true
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    rollupPluginHandlebars({
      helpersDirs: path.resolve(__dirname, './.toolkit/handlebars'),
      partialsDirs: [
        path.resolve(config.dir.paths.srcComponents),
        path.resolve(config.dir.paths.srcModules),
        path.resolve(config.dir.paths.srcModules, 'global')
      ]
    })
  ]
});
