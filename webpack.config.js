const path = require('path');
const { VueLoaderPlugin }  = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
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
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
