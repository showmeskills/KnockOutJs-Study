const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//配置信息
module.exports ={
    entry:'./src/app.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        //告诉webpack不适用箭头函数;意思就是当webpack会转译箭头函数的时候,使用环境变量来修改它的值
        environment:{
            arrowFunction:false,
        }
    },
    module:{
        rules:[
            //指定loader的规则
            {
                test:/\.ts$/,
                //要使用的loader
                use:[
                    {
                        //指定加载器
                        loader:'babel-loader',
                        //设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境插件
                                    '@babel/preset-env',
                                    //配置信息
                                    {
                                        //兼容的目标浏览器
                                        targets:{
                                            "chrome":'58',
                                            "ie":'11'
                                        },
                                        //使用corejs的那个版本 例如ie 11不兼容promise使用corejs 和 useBuiltIns 来帮它下载promise
                                        "corejs":"3",
                                        //使用corejs的方法,按需下载(所以会把)
                                        'useBuiltIns':'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                exclude:/node_modules/,
            },
            {
                test:/\.(less|css)$/,
                use:[
                    'style-loader','css-loader',
                    //引入postcss
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers:'last 2 version',
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            //修改打包后的html的文件抬头
            title: 'knockout - demo in TS',
            template:'./src/view/index.html',
            inject:'body',
            }),
        new CleanWebpackPlugin(),
    ],
    resolve:{
        //添加以ts/js结尾的文件作为模块使用
        extensions:['.js', '.ts']
    },
    mode:'none',
}