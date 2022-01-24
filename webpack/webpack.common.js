const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PROJECT_PATH = path.resolve(__dirname, '../');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(PROJECT_PATH, './dist'),
  },
};
