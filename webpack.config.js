/* eslint-env node */
const { resolve } = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const buildDir = 'docs';
const path = resolve(__dirname, buildDir);

module.exports = {
  // start here
  entry: './src/index.js',
  // put the build output here (not the dev server)
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: ''
  },
  // mode (will eventually be cmd line arg in package.json)
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `./${buildDir}`
  },
  plugins: [
    // add plugins
    new CleanPlugin(`${path}/bundle.*.js`),
    new HtmlPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: 'Chrome 65'
                  // browsers: ['last 2 versions', 'safari >= 7'] << options to customize
                },
              }],
              'react',
            ],
            plugins: [
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-class-properties')
            ],
            cacheDirectory: true
          }
        }
      },

      // css
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },

      // images
      {
        test: /\.(jpg|png|svg|)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 500 },
        }
      }
    ]
  }
};