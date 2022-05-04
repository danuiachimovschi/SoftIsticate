let webpack = import('webpack');
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'softweb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {rel:'stylesheet', href: 'https://unpkg.com/swiper@7/swiper-bundle.min.css'},
      {rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Lato:wght@400;700&display=swap'},
      {rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap'},
    ],
    script: [
      { hid: 'stripe', src: 'assets/swiper-bundle.js', defer: true }
    ]
  },

  // <script src="https://kit.fontawesome.com/285bb7b355.js" crossorigin="anonymous"></script>

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    'swiper/swiper-bundle'
  ],
       
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tooltip.js',     
    {src:'~/plugins/vue-typer.js',mode:"client"},
  ],
  
  fontawesome: {
    component: 'fa'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
 
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/router-extras',
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // lintOnSave:false,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
