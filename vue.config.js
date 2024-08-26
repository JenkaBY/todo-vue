const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.APP_PUBLIC_PATH ? `/${process.env.APP_PUBLIC_PATH}/` : './'
})
