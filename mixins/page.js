import AOS from 'aos'

export default function () {
  return {
    head () {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        title: this.title,
        meta: [
          { hid: 'og:title', name: 'og:title', content: this.title },
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'og:description', name: 'og:description', content: this.description }
        ],
        link: []
      }
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    // httpHeaders: () => ({
    //   'Cache-Control': 'max-age=300, public'
    // }),
    computed: {
      title () {
        return ''
      },
      description () {
        return ''
      }
    },
    methods: {},
    mounted () {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        disable: 'mobile'
        // disableMutationObserver: true
      })
    }
  }
}
