const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'index': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    plugins:[
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
    module: {
        rules: [
            {
                test: /\.s([ac])ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [require('autoprefixer')]
                                }
                            }
                        }
                    },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                type: 'asset/resource',
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 8888,
        hot: true,
    }
};
