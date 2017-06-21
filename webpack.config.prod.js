var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
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
        },  {
            test: /\.(png|jpg|gif|svg|mp4)$/,
            loader: 'url?limit=50'
        }, {
            test: /\.paper.js$/,
            loader: 'paper-loader'
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
          }]
    }
};
