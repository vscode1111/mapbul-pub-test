const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'production',
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
    plugins: [new TsconfigPathsPlugin({ })]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    minimize: true
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
  },
};
