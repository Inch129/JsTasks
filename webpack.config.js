module.exports = {
	entry: "./scripts/index.js",
	output: {
		filename: "bundle.js"
	},
    watch: true,

    watchOptions: {
		aggregateTimeout: 100
	}
};