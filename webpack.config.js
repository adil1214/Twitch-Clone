const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
 },
 mode: 'development',
 plugins: [HtmlWebpackPluginConfig],
 devServer: {
  port: 1111,
  open: true,
 }
}