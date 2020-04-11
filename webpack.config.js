// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    node: { fs: 'empty' },
    entry: {
        "bundle": "./src/main.js",
        //"bundle.min": "./src/index.js" 
    },
    output: {
        path: '/Users/Jason/projects/Vue Boilerplate/dist/',
        filename: "webpack.bundle.js",
        publicPath: '/dist/'
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            test: /\.js$/
        })],
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 8081,
        headers: {
            'X-Frame-Options': 'sameorigin'
        },
    },
	module : {
		rules: [
			{
                test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
		        test: /\.(sa|sc|c)ss$/,
		        use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
		],
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}