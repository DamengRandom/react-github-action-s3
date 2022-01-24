const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require('path');
// const PROJECT_PATH = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: path.resolve(PROJECT_PATH, './dist'), // client side routing will not work
    historyApiFallback: true, // enable client side routing
  },
});
