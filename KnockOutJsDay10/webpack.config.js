const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry:path.join(__dirname,"src","app.ts"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        environment:{
            arrowFunction:false,
            const:false,
        }
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        "corejs":"3",
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },"ts-loader"],
                exclude:/node_modules/,
            },
            {
                test:/\.(less|css)$/,
                use:[
                    "style-loader","css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:"last 2 version",
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }

        ]
    },
    plugins:[
        new HtmlWepackPlugin({
            title:"knockout - demo in TS",
            template:path.join(__dirname,"src","view","index.html"),
            inject:'body',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve:{
        extensions:[".js",'.ts']
    },
    mode:"none",
}