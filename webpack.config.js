const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "wrenchui.min.css",
});

const config = {
    entry: './src/main.scss',
    output: {
        filename: 'wrenchui.min.css',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        'sass-loader'
                    ]
                })
            },
            // {
            //     test: /\.scss/,
            //     use: [
            //         {
            //             loader: 'css-loader'
            //         },{
            //             loader: 'sass-loader'
            //         }
            //     ]
            // }
        ]
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, '../public'),
    //     stats: 'errors-only',
    //     port: 9000
    // },
    devtool: "source-map",
    plugins: [
        extractSass
    ]
};

module.exports = config;