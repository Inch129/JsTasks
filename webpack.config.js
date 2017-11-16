module.exports = {
	entry: "./scripts/index.js",
	output: {
		filename: "bundle.js"
	},
    watch: true,
    watchOptions: {
		aggregateTimeout: 100
	},
    module: {
        rules: [
            { 	test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
            }
        ]
    },

};