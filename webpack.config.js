var path = require('path');
var SRC_DIR = path.resolve(__dirname, 'client', 'src');
var DIST_DIR = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  mode: 'development'
};
