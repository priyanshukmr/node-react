const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './ui/react-mount.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
    //   inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './ui/index.html'
      })
   ]
}