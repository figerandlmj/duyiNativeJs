const path = require("path");
const root = path.resolve(__dirname, '..');
const vueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    entry: ['babel-polyfill', path.join(root, 'entry/entry.client.js')],
    output: {
        path: path.join(root, 'dist'),
        filename: 'bundle.client.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: root,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!styles-loader'
            },
        ]
    },
    plugins:[
        new vueLoaderPlugin()
    ]
}