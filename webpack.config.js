module.exports = {
    entry: '/public/index.html',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            }
        ],
    },
    devServer: {
        static: __dirname + '/dist',
        compress: true,
        hot: true,
    },
};