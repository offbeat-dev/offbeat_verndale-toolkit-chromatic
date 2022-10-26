import fs from 'fs';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from '../config';
import { WebpackArgs } from '../webpack.config';

const { paths } = config.dir;

const readHbsPartialDirectories = () => {
  const directories = [`../${paths.srcModules}/`, `../${paths.srcComponents}/`];

  const readdir = (directory: string) =>
    fs
      .readdirSync(path.resolve(__dirname, directory))
      .map(dir => directory + dir)
      .filter(dir => !path.extname(dir));

  return directories
    .concat(...directories.map(directory => readdir(directory)))
    .map(directory => path.resolve(__dirname, directory));
};

export default ({ production }: WebpackArgs) => {
  return [
    {
      test: /\.tsx?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2015'
      },
      include: [
        path.resolve(__dirname, `../.storybook`),
        path.resolve(__dirname, `../${paths.srcJS}`)
      ]
    },
    {
      test: /\.scss$/,
      include: [path.resolve(__dirname, `../${paths.srcStyles}`)],
      use: [
        production ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: {
                autoprefixer: {}
              }
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.(handlebars|hbs)$/,
      loader: 'handlebars-loader',
      options: {
        helperDirs: path.resolve('handlebars'),
        partialDirs: readHbsPartialDirectories(),
        precompileOptions: {
          knownHelpersOnly: false
        }
      },
      include: path.resolve(paths.srcHtml)
    }
  ];
};
