var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    postcss () {
        return [ require('autoprefixer') ]
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css/,
            loader: 'style!css!postcss',
            include: path.join(__dirname, 'src')
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url?limit=50'
        }, {
              test: /\.mp4$/,
              loader: 'url?limit=10000&mimetype=video/mp4'
        }, {
            test: /\.paper.js$/,
            loader: 'paper-loader'
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
          }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
};
