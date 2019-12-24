const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: './index.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                loader: 'css-loader'
            },
        ]
    },
};
