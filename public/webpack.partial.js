const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssPlug = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
});

const copyPlug = new CopyWebpackPlugin([
    { from: 'font-awesome', to: 'font-awesome' },
    { from: 'views', to: 'views' },
    { from: 'img', to: 'img' },
]);

module.exports = {
    plugins: [
        cssPlug,
        htmlPlug,
        copyPlug,
    ],
    entry: {
        'app-js': './src/app.ajs.ts',
        app: './src/app.module.ts',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: '[name].vendor.js',
                    chunks: 'initial',
                },
            },
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false,
                    },
                },
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
