// webpack.config.js
const path = require('path');

module.exports = {
    entry: "./widgets.jsx", //! 1
    output: { //! 1
        // path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    devtool: 'source-map', //! 3
    resolve: { //! 4
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: { //! 2
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        }]
    }

};
