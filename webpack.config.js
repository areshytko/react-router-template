/**
 * Created by areshytko on 27.01.17.
 */

var path = require("path");

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
