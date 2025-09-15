 const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Babel loader for JS/JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // CSS loader + style loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      // File loader for image assets (png, jpg, jpeg, gif)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource' // webpack 5 built-in asset module for files
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
