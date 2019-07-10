const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//获取模式变量 dev 开发模式  dist 本地生产模式  release 服务器生产模式
var WEBPACK_PRO_ENV = process.env.NODE_ENV;
console.log(process.env.NODE_ENV)
var modelString = {
    'dev':'你现在打包模式是dev开发模式',
    'dist':'你现在打包模式是dist本地生产模式',
    'release':'你现在打包模式是release服务器生成模式'
}
console.log(modelString[WEBPACK_PRO_ENV]);

const sourcePath = {
    'dev':path.join(__dirname,'../server/views'),
    'dist':path.join(__dirname,'../dist'),
    'release':'/opt/allwebfront/topwebfront'
}

module.exports={
    entry:'./src/main.js',
    output:{
        filename:'js/[name]_[chunkhash:8].js',
        path:sourcePath[WEBPACK_PRO_ENV],
        publicPath:'./'
    },
    /*resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js','.css', '.vue']
    },*/
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        js:'babel-loader!eslint-loader',
                    },
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                // 使用 mini-css-extract-plugin 插件来分离出 css 文件
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'images/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {//解析文字图标
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vueTest',
            filename:'index.html',
            template:'./src/index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin('css/[name]_[hash:8].css')
    ]
}
