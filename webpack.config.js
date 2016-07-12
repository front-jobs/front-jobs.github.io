 var path = require('path');
 module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'public'),
         publicPath: '/public/',
         filename: 'main.bundle.js'
     },
    module: {
         loaders: [{
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
     }
 };