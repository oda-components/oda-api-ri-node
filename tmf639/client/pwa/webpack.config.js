const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
	{
		entry: [
		],
		output: {
			filename: 'bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'bundle.css'
							}
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									includePaths: [
										'./node_modules'
									]
								}
							}
						}
					]
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						]
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'index.html',
				inject: false
			}),
		]
	}
];
