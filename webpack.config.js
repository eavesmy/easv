const path = require("path");

module.exports = {
    mode: "development",
    entry: './main.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'plugin.js',
        path:"/Users/eaves/Documents/Mjcx/demo/plugins/assists"
    }
}
