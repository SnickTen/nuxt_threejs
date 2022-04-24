import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
const isStage = process.env.NODE_ENV === 'staging'
const envFilename = isStage ? '.env.stage' : isDev ? '.env.dev' : '.env.prod'
require('dotenv').config({ path: envFilename })
const generate = require('./configs/generate.js').default

generate.dir = process.env.DIST

export default {
  ssr: true,
  globalName: 'app',
  components: false,
  loading: false,

  head: require('./configs/head.js'),
  i18n: require('./configs/i18n.js').default,
  server: require('./configs/server.js').default,
  router: require('./configs/router.js').default,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/global.scss'
  ],

  styleResources: {
    scss: ['assets/styles/prepend.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/router.js', mode: 'client' }
  ],

  serverMiddleware: [
    '~/middleware/server-trailing-slash.js'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.PUBLIC_PATH,
    extractCSS: process.env.EXTRACTCSS === '1',
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.i18n$/,
        loader: `@kazupon/vue-i18n-loader?${JSON.stringify({
          includePaths: [path.resolve(__dirname), 'node_modules']
        })}`
      })
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isDev ? '[name]_[local]_[hash:base64:6]' : '[hash:base64:8]'
        }
      }
    }
  },
  env: {
    API_BASE_PATH: process.env.API_BASE_PATH
  }
}
