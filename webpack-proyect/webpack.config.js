const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: '/src/main.js',
    module:{
        rules:[
            //Se va a definir los loaders
            //Sintaxis 
            /*
              {
                test: REGEX - PARA UNA BUSQUEDA DE ARCHIVOS O EXTENSIONES
                use: Instrucciones de qué va a hacer con esos archivos
              }
             */
            {
                test: /\.html/, //va a buscar todos los .html
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test:/.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:[
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use:[
                    "file-loader"
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({template: "./src/index.html"}),
        new miniCSSExtractPlugin(),
    ]
  };