module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /index\.js$/,
            use: [{
                loader: "./compile.js",
                options: {
                    changeVar: '变量'
                }
            }]
        },
        ],
    }
}