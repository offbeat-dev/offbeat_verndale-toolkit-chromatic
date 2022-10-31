import path from 'path';
import { WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackSvgStore from 'webpack-svgstore';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import config from '../config';
import { WebpackArgs } from '../webpack.config';

const { paths } = config.dir;

export default ({ production }: WebpackArgs) => {
  let plugins: Array<WebpackPluginInstance> = [
    new WebpackSvgStore({
      path: path.resolve(__dirname, `../${paths.srcSvgSprites}`),
      fileName: 'images/svgsheet.svg',
      removeViewBox: true
    })
  ];

  if (production) {
    plugins = [
      ...plugins,
      new MiniCssExtractPlugin({
        filename: 'css/styles.css'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: path.resolve(__dirname, 'report.html')
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, `../${paths.srcStatic}`),
            to: path.resolve(
              __dirname,
              `../${config.dir.production}`,
              config.publicPath
            ),
            filter: resourcePath => {
              if (
                path.dirname(resourcePath) ===
                path.resolve(__dirname, `../${paths.srcSvgSprites}`)
              ) {
                return false;
              }

              return true;
            }
          }
        ]
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['mozjpeg', { quality: 85, progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'removeViewBox'
                    }
                  ]
                }
              ]
            ]
          }
        },
        exclude: [/svgsheet.svg/]
      })
    ];
  }

  return plugins;
};
