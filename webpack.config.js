const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

module.exports = (env, argv) =>
{
	const isProduction = argv.mode == 'production';

	return {
		entry: {
			bundle: ['./src/main.js']
		},
		resolve: {
			alias: {
				svelte: path.resolve(__dirname, 'node_modules', 'svelte')
			},
			extensions: ['.svelte', '.js', '.css'],
			mainFields: ['svelte', 'browser', 'module', 'main'],
		},
		output: {
			path: __dirname + '/out',
			filename: '[name].[contenthash].js',
			chunkFilename: '[name].[id].[contenthash].js',
		},
		devtool: isProduction ? false : 'source-map',
		module: {
			rules: [
				{
					test: /\.svelte$/,
					use: {
						loader: 'svelte-loader',
						options: {
							emitCss: true,
							hotReload: !isProduction,
							preprocess: sveltePreprocess(),
						},
					},
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					],
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
		],
	};
};