const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: ['./src/main.ts'],
  // watch: true,
  externals: [
    nodeExternals(),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]
  },
  // optimization: {
  //   minimize: true
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
};