const path = require('path');

module.exports = {
    entry: path.resolve('./example/index.js'),

    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [
            '.js'
        ]
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
