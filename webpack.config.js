const path = require('path');
const { VueLoaderPlugin }  = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './node_modules/bootstrap/dist/css/bootstrap-reboot.css',
        './src/app.ts'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test : /\.ts$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test : /\.vue$/,
                use  : 'vue-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
};
