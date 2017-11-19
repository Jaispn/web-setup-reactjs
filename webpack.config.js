var config = {
    entry: './main.js',
    debug: true,

    output: {
        path: './',
        filename: 'output.js',
    },

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {test: /\.scss$/, loader: "style!css"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
}

module.exports = config;