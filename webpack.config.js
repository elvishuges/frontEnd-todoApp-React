
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {

    entry : './src/index.jsx',
    output: {
        path : __dirname + './public',
        filename: './app.js'
    },
    // pasta de entrada para o projeto . onde ficara o index.js
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // aqui dizemos quais os tipos de extensão que ele (o webpack) deve resolver
    resolve:{
        extensions: ['','.js','.jsx'],
        //colocando apelido na pasta node_module.
        alias:{
            modules:__dirname+'/node_modules'
        }
    },
    //fazer parser emcima dos nossos css e gerar um arquivo com o nome app.css
    plugins:[
        new ExtractTextPlugin('app.css')
     ],
    // configuração de modulos
     module: {
        loaders: [{
            test: /.js[x]?$/, // tanto js como jsx vao ser interpretados
            loader: 'babel-loader', // esse é o loader 
            exclude: /node_modules/,  // ignora essa pasta 
            query: {
                presets: ['es2015','react'], //aplicar esse presets
                plugins: ['transform-object-rest-spread'] // plugin 
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css-loader'),
          },{
            test:/\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
          }]
    }
}