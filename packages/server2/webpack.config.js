const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: "node",
  // node: {
  //   dotenv: 'empty',
  // },
  mode: 'production',
  externals: [
    nodeExternals(),
  ],
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].js',
    filename: 'main.js',
    libraryTarget: 'umd',
    library: 'Common',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ })]
  },
  // devtool: 'source-map',
  optimization: {
    minimize: true
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
