/*  Required Packages                                             */
const webpack               = require('webpack')
const path                  = require('path');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const WebpackMd5Hash        = require('webpack-md5-hash');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CleanWebpackPlugin    = require('clean-webpack-plugin');
//used to load style loader in dev
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  //entry to bundled js file
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'   //output filename
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
        use:  [  devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader'],
        exclude: ["node_modules"]
      }
    ]
  },
  //webpack server hot module replacement
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
    // new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']  //array of extensions to compile js
  },
  devServer: {
     contentBase: './dist',
     hot: true
  }
}
