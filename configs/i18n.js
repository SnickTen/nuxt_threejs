// https://i18n.nuxtjs.org/setup
export default {
  strategy: 'prefix_except_default',
  locales: [
    {
      code: 'en',
      name: 'English',
      key: 'en-us'
    }
  ],
  defaultLocale: 'en',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: {
      en: require('../assets/translates/en')
    }
  }
}
