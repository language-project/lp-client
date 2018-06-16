const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.base.config.js');

const APP_PATH = path.resolve(__dirname, '../../src/app');

const devConfig = {
  devtool: 'source-map',
  entry: {
    mobile: [
      'webpack-hot-middleware/client', 
      path.resolve(APP_PATH, 'app.mobile.jsx'),
    ],
  },
  mode: 'development',
  optimization: {
    minimize: false,
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = merge(config, devConfig);
