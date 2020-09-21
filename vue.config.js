const path = require('path');
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', path.join(__dirname, './src/assets'))
            .set('pages', path.join(__dirname, './src/pages'))
            .set('src', path.join(__dirname, './src'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}