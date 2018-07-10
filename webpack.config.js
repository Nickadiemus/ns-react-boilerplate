const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //entry to bundled js file
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']  //array of extensions to compile js
  },

  output: {
    path: __dirname + '/dist',  //The bundled files will result in a bundle.js file which
    publicPath: '/',            //start of the path
    filename: 'bundle.js'       //output filename
  },
  //webpack server hot module replacement
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  //will be generated in our already set up /dist folder. The /dist folder will be used to serve our app.
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
