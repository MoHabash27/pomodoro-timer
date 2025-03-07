const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'src'),  // يخدم الملفات من src
        compress: true,
        port: 8080,
        historyApiFallback: true, // دعم إعادة التوجيه إلى index.html
        open: true, // فتح المتصفح تلقائيًا عند التشغيل
    },
};