const { config } = require('./config')
module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /index\.js$/,
            use: [{
                loader: "./compile.js",
                options: config
            }]
        },
        ],
    }
}