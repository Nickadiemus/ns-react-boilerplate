const webpack = require('webpack')

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
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  //The bundled files will result in a bundle.js file which
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //will be generated in our already set up /dist folder. The /dist folder will be used to serve our app.
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
