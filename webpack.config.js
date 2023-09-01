/*
 * @Author: 大蒙
 * @Date: 2023-09-01 05:18:58
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-01 13:24:16
 * @FilePath: \webpack\webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
import { resolve, dirname } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url';


export default {
    mode: 'development',
    entry: {
        main: './src/index.js',
        vender: './src/list.js'
    },
    output: {
        filename: '[name]_[hash:8].js',
        path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: 'style-loader' }, {
                    loader: resolve('loader/loader')
                }, { loader: 'css-loader' }],
            },
        ],
    },
};