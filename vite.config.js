import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import viteImagemin from 'vite-plugin-imagemin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { PUBLIC_PATH } from './config';
import { COMPONENTS_DIR, MODULES_DIR, SOURCE_PATHS } from './.toolkit/config';
import handlebars from './.toolkit/vite/vite-plugin-handlebars';
import svgIcons from './.toolkit/vite/vite-plugin-svgstore';

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
        styles: path.resolve(__dirname, SOURCE_PATHS.STYLES, 'styles.scss')
      },
      output: {
        dir: `dist/${PUBLIC_PATH}`,
        entryFileNames: 'scripts/[name].bundle.js',
        chunkFileNames: 'scripts/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name][extname]';
          }

          if (name === 'styles.css') {
            return 'css/[name][extname]';
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
    handlebars({
      helpersDirs: path.resolve(__dirname, './.toolkit/handlebars'),
      partialsDirs: [
        path.resolve(SOURCE_PATHS.MARKUP, COMPONENTS_DIR),
        path.resolve(SOURCE_PATHS.MARKUP, MODULES_DIR),
        path.resolve(SOURCE_PATHS.MARKUP, MODULES_DIR, 'global')
      ],
      globals: {
        publicPath: PUBLIC_PATH
      }
    }),
    svgIcons({
      inputFolder: path.resolve(__dirname, SOURCE_PATHS.STATIC, 'svg-sprites'),
      output: `dist/${PUBLIC_PATH}images/svgsheet.svg`,
      spriteName: 'svgsheet',
      svgoOptions: {
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
    })
  ]
});
