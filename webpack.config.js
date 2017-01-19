var webpack = require("webpack");
var path = require("path");


module.exports = {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
      path: "./dist",
      publicPath: "/assets/"
    },
    devServer: {
        contentBase: './public/'
    },    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }    
}