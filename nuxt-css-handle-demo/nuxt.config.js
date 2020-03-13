const routerChunkToCssPlugin = require('./plugins/router-chunk-to-css')
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/router-event.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: process.env.NODE_ENV === 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /.css$/g
        })
      ],
     splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: (mod, chunks) => {
              return mod.type === 'css/extract-css-chunks'
            },
            chunks: 'all',
            minChunks: 2,// 在三个路由中被使用到则提取
            enforce: true,
            minSize: 0 // 10kB 大小才提取
          }
        }
     }
  },
  terser: false,
  extend (config, ctx) {
      if ( process.env.NODE_ENV === 'production') {
        config.plugins.push(
          new routerChunkToCssPlugin()
        )
      }
    }
  }
}
