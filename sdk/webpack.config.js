/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: './index.ts',
  output: {
    path: path.join(__dirname, '../dist-sdk'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/'),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } },
        ],
      },
    ],
  },
};
