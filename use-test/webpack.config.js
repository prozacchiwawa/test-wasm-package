var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    target: 'node',
    loader: {
        "foo": 'babel-loader'
    },
    module: {
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    experiments: {
	      asyncWebAssembly: true
    }
};
