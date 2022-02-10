const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.MODE,

  devtool: 'inline-source-map',

  entry: './src/scripts/index.tsx',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle[contenthash].js',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/img'), to: 'img' },
        { from: path.resolve(__dirname, 'src/assets/fonts'), to: 'fonts' },
        { from: path.resolve(__dirname, 'src/css'), to: 'css' },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    host: 'local-ipv4',
    port: 3000,
    historyApiFallback: true,
  },
};
