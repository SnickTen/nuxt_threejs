// Global page headers (https://go.nuxtjs.dev/config-head)

module.exports = {
  title: 'Your title',
  htmlAttrs: {
    prefix: 'og:http://ogp.me/ns#',
    lang: 'ru'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#fff' },
    { name: 'msapplication-TileColor', content: '#fff' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'yes' },
    { property: 'og:url', content: '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' },
    { property: 'og:image', content: '' },
    { property: 'og:image:secure_url', content: '' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'vk:image', content: '' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@tass_agency' },
    { name: 'twitter:title', content: '' },
    { name: 'twitter:description', content: '' },
    { name: 'twitter:image', content: '' }
  ],
  link: [
    // { rel: 'shortcut icon', href: '' },
    // { rel: 'image_src', href: '' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Lexend+Exa&display=swap' }
  ],
  script: []
}
