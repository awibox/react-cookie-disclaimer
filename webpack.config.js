const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: './index.js',
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            fallback : 'style-loader',
            filename: './css/[name].css',
            chunkFilename: './css/[name].css',
        }),
    ],
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};
