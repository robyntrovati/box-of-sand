var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/sketches.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8000,
  },
  module: {
    noParse: /node_modules\/p5\/lib\/p5.js/,  // Supresses "pre-built javascript file" warning
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-3'],
      },
    }, {
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
    }),
  ],
  resolve: {
    extensions: [ '', '.js'],
  },
};
