// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    node: { fs: 'empty' },
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
		        test: /\.css$/i,
		        use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
		],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}