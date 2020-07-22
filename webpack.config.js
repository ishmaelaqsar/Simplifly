const webpack = require("webpack");
const path = require("path");
const env = require("./utils/env");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

const fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

const options = {
    name: "extension",
    mode: "production",
    entry: {
        popup: path.join(__dirname, "src", "js", "popup.js"),
        summary: path.join(__dirname, "src", "js", "summary.js"),
        options: path.join(__dirname, "src", "js", "options.js"),
        background: path.join(__dirname, "src", "js", "background.js"),
        content: path.join(__dirname, "src", "js", "content.js"),
        vendor: path.join(__dirname, "src", "jquery-3.5.1.min.js"),
        index: path.join(__dirname, "src", "index.js")
    },
    externals: {
        jquery: "jQuery"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // Creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // Translates CSS into CommonJS
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: new RegExp('\.(' + fileExtensions.join('|') + ')$'),
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                exclude: /node_modules/
            },
            {
                test: /jquery.+\.js$/,
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },
    resolve: {
        alias: alias
    },
    plugins: [
        // clean the build folder
        new CleanWebpackPlugin(),
        // expose and write the allowed env vars on the compiled bundle
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/manifest.json",
                    transform: function (content) {
                        // generates the manifest file using the package.json informations
                        return Buffer.from(JSON.stringify({
                            description: process.env.npm_package_description,
                            version: process.env.npm_package_version,
                            ...JSON.parse(content.toString())
                        }))
                    }
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "popup.html"),
            filename: "popup.html",
            chunks: ["popup"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "summary.html"),
            filename: "summary.html",
            chunks: ["summary"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "options.html"),
            filename: "options.html",
            chunks: ["options"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "background.html"),
            filename: "background.html",
            chunks: ["background"]
        }),
        new WriteFilePlugin()
    ]
};

if (env.NODE_ENV === "development") {
    options.devtool = "cheap-module-eval-source-map";
}

module.exports = options;
