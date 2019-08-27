const path = require('path')
const webpack = require('webpack')//启用热更新 2步
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),   //入口
    
    output:{
        path:path.join(__dirname,'./dist'), //出口
        filename:'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),// 启用热更新 3步
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'

        })
    ],
    module:{//配置所有 第三方模块 加载器
        rules:[//所有第三方模块 的匹配规则
            //配置处理.css文件的第三方 loader规则
            {test:/\.css$/,use:['style-loader','css-loader']},//先调用css-loader，在调用style-loader
            //配置处理.less文件的第三方 loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
             //配置处理.scss文件的第三方 loader规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置图片文件
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=8419&name=[hash:8]-[name].[ext]'},
            //limit给定的值，是图片的大小，单位byte，如果 limit < 图片大小，则不会被转为Base64格式;
            //否则，limit >= 图片大小，则会转换为Base64格式;
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
  
}