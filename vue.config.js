const path = require('path')


module.exports = {

    configureWebpack: (config) => {
        // 
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, "src"))
            .set('@assets', path.join(__dirname, "src/assets"))
    },
    devServer: {
        port: 8078
    }
}