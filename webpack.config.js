const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry: ['@babel/polyfill','./src/scripts/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        compress: true,
        port: 9000
    },

    module: {
        rules: [{
                test: /\.s?css$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10&name=images/[name].[ext]'
            }
        ]
    },


    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
       new CopyWebpackPlugin([
            {
                from:'src/images',to:'images'
            } 
        ]), 
    ]
}