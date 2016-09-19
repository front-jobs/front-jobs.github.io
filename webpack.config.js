var path = require('path');

module.exports = {
    debug: true,
    devtool: "eval-source-map",
    entry: './src/main.jsx',
    resolve: {
        modulesDirectories: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public/',
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file'
            }
        ]
    }
};