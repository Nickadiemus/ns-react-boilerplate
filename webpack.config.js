/*  Required Packages                                             */
const path                  = require('path');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const WebpackMd5Hash        = require('webpack-md5-hash');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CleanWebpackPlugin    = require('clean-webpack-plugin')
module.exports = {
  //entry to bundled js file
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'   //output filename
  },
  //want to use the src/index.js file as entry point to bundle all of its imported files
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
      }
    ]
  },
  //webpack server hot module replacement
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']  //array of extensions to compile js
  }
}
