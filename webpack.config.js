/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: process.env.MODE,
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@factories': path.resolve(__dirname, './src/factories'),
    },
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      eslintOptions: {
        cache: true,
      },
    }),
  ],
};
