const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Нужен для анализа, при финальной сборке проверить на память
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


// Оптимизация
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // Готовый продукт
    // mode: 'production',
    // Сборка для разработки
    mode: 'development',
    // Подключение map к сборке
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'main.bundle.js',
    },

    // Настройка порта
    devServer: {
        port: 9000,
    },

    // https://github.com/webpack-contrib/terser-webpack-plugin
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    module: {
        rules: [{
                // Если есть расширение .m или .js
                test: /\.js$/,
                // игнорирование папок node_modules и bower_components
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // null-loader используется тогда, когда знаешь какая зависимсть
                    // лишняя
                    // loader: 'null-loader',
                    options: {
                        "presets": ["@babel/preset-env", {
                            "exclude": ["transform-async-to-generator", "transform-regenerator"]
                        }],
                    }
                },
            },
            {
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: ''
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css',
        }),
        // Анализатор занятости места
        // new BundleAnalyzerPlugin(),
        // Очистка перед каждой сборкой
        new CleanWebpackPlugin(),
    ]
}