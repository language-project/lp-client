const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const APP_PATH = path.resolve(__dirname, '../../src/app');
const DIST_PATH = path.resolve(__dirname, '../../dist');

module.exports = {
  entry: {
    mobile: path.resolve(APP_PATH, 'app.mobile.jsx'),
    react: ['react', 'redux', 'react-redux'],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s?css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]-[local]-[hash:base64:4]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
    minimize: true,
    splitChunks: {
      chunks: 'all',
    }
  },
  output: {
    path: DIST_PATH,
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    alias: {
      '@actions': path.resolve(APP_PATH, 'state', 'actions'),
      '@apis': path.resolve(APP_PATH, 'apis'),
      '@components': path.resolve(APP_PATH, 'components'),
      '@config': path.resolve(APP_PATH, 'config'),
      '@constants': path.resolve(APP_PATH, 'constants'),
      '@containers': path.resolve(APP_PATH, 'containers'),
      '@hocs': path.resolve(APP_PATH, 'hocs'),
      '@models': path.resolve(APP_PATH, 'models'),
      '@modules': path.resolve(APP_PATH, 'modules'),
      '@selectors': path.resolve(APP_PATH, 'state', 'selectors'),
      '@src': path.resolve(APP_PATH),
      '@state': path.resolve(APP_PATH, 'state'),
      '@styles': path.resolve(APP_PATH, 'styles'),
      '@types': path.resolve(APP_PATH, 'types'),
      '@utils': path.resolve(APP_PATH, 'utils'),
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules'),
    ],
  },
};
