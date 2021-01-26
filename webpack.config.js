var path = require('path');
var SRC_DIR = path.resolve(__dirname, 'client', 'src');
var DIST_DIR = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'overview-bundle.js'
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


/*  module.exports = {
   module: {
     loaders: [
       {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
       {loader: 'style-loader!css-loader', test: /\.css$/},
       {loader: 'url-loader', test: /\.gif$/},
       {loader: 'file-loader', test: /\.(tff|eot|svg)$/ },
     ],
   },
   resolve: {
     alias: {
       config$: './configs/app-config.js',
       react: './vendor/react-master',
     },
     extensions: ['', 'js', 'jsx'],
     modules: [
       'node_modules',
       'bower_components',
       'shared',
       'shared/vendor/modules',
     ],
   },
 }; */
