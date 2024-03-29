process.env.DEBUG = "nuxt:*";

export default {
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Проектирование и строительство бассейна. Пленка и оборудование в наличии на складе в Казахстане.",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Спроектируем и построим бассейн под Ваши требования. Комплектующие в наличии на складе в Алматы. Отправка по Казахстану. Гарантия на работу и оборудование.",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "noindex" },
      { name: "yandex-verification", content: "fb9d82ed21c7d7e8" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
    script: [

    ],
  },

  env: {
    DIRECTUS_URL: process.env.DIRECTUS_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/viewer.js",
    "@/plugins/modal.js",
    { src: "@/plugins/notification-ssr.js", ssr: true },
    { src: "@/plugins/notification.js", ssr: false },
    "@/plugins/axios.js",
    "@/plugins/icons.js",

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/apollo",
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/sentry",
    "@nuxtjs/yandex-metrika",
  ],

  sentry: {
    dsn: process.env.SENTRY_DSN,
  },

  yandexMetrika: {
    id: "88864210",
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true, // Can be also an object with default options
  },

  proxy: {
    "/directus": {
      target: process.env.DIRECTUS_URL,
      pathRewrite: { "^/directus": "" },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: `https://${process.env.DOMAIN}`,
    gzip: true,
    routes: ["/search", "/catalog/plenka", "/catalog/plenka/58"],
  },

  tailwindcss: {
    // Options
    configPath: "tailwind.config.js",
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.DIRECTUS_URL}/graphql`,
      },
    },
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      let defaultPos = { left: 0, top: 0 };
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        let elem = document.querySelector(to.hash);
        return elem ? elem.scrollIntoView({ behavior: "smooth" }) : defaultPos;
      } else {
        return defaultPos;
      }
    },
  },
};
