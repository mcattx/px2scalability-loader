# px2scalability-loader

A [webpack](https://webpack.js.org/) loader for [px2scalability](https://github.com/titancat/px2scalability)

## Install

```
npm install px2scalability-loader
```

## webpack-config 

```
module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'px2scalability-loader', 'postcss-loader', 'sass-loader']
                    }),
                include: path.join(__dirname, 'src'), //限制范围，提高打包速度
                exclude: /node_modules/
            }
        ]  
    }
}
```

## Options

Please see [px2scalability](https://github.com/titancat/px2scalability) for more information.