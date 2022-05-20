process.env.DEBUG = 'nuxt:*'

export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Proaqua.kz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name:"robots", content:"noindex" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [
      { src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' },
    ]
  },

  env: {
    DIRECTUS_URL: process.env.DIRECTUS_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/viewer.js',
    '@/plugins/modal.js',
    { src: '@/plugins/notification-ssr.js', ssr: true },
    { src: '@/plugins/notification.js', ssr: false },
    '@/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
  ],

  sentry: {
    dsn: 'https://f8d0f1b389794506b178cc6b354699b6@o1255814.ingest.sentry.io/6424519',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/directus': {
      target: process.env.DIRECTUS_URL,
      pathRewrite: { '^/directus': '' }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: `https://${process.env.DOMAIN}`,
    gzip: true,
    routes: [
      '/search',
    ],
  },

  tailwindcss: {
    // Options
    configPath: 'tailwind.config.js',
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.DIRECTUS_URL}/graphql`,
      }
    }
  },
}
