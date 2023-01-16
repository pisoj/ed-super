module.exports = {
    mode: "production",
    entry: ["./src/style.css", "./src/app.ts"],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "styleTag"
                        },
                    },
                    "css-loader"
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "app.js",
    },
};