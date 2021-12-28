export default {
  /*
  ** Headers of the page
  */
  head: {
    title: "Manual d'estil - Compromís",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "La nostra guia d'estil de Compromís, amb tot el material gràfic, instruccions per a la seua correcta aplicació i ferramentes per facilitar la creació de material." },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#353949' },
      { property: 'og:image', content: '/og-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', type: 'image/x-icon', href: '/safari-pinned-tab.svg', color: '#ff6720' },
      { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/compromis.css' }
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
    './sass/style.scss',
    '@compromis/blobby/scss/blobby.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/global.js',
    './plugins/blobby.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/axios',
    'nuxt-clipboard2',
    ['vue-scrollto/nuxt', { offset: -80 }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare', 'faTwitter', 'faInstagram', 'faWhatsapp', 'faYoutube', 'faTelegram']
        },
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: [
            'faFontCase', 'faPalette', 'faShareAlt', 'faPrint', 'faCamera',
            'faFilm', 'faMegaphone', 'faArrowCircleDown', 'faFile', 'faTimesCircle',
            'faSendBackward', 'faUserCircle', 'faBook', 'faPhotoVideo', 'faPlay', 'faPortrait',
            'faEye', 'faEyeSlash', 'faNewspaper', 'faAlignLeft', 'faQuoteLeft', 'faLockAlt',
            'faEnvelope', 'faChevronDown', 'faLink'
          ]
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  },

  /*
  ** BootstrapVue config
  */
  bootstrapVue: {
    componentPlugins: [
      'NavbarPlugin',
      'CollapsePlugin',
      'VBScrollspyPlugin',
      'ButtonPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'DropdownPlugin',
      'TooltipPlugin'
    ],
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  styleResources: {
    scss: '@compromis/blobby/scss/_variables.scss'
  }
}
