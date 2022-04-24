<template>
  <a @click="onClick" :class="classes" v-if="href" :href="href" rel="noopener" target="_blank">
    <slot />
  </a>

  <router-link @click.native="onClick" :class="classes" v-else-if="to" :to="routeTo">
    <slot />
  </router-link>

  <component @click="onClick" :is="tag" :class="classes" v-else>
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'UiButton',
    props: {
      href: {
        type: String,
        default: ''
      },
      to: {
        type: String,
        default: ''
      },
      tag: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick (event) {
        if (!this.disabled && !this.loading) {
          this.$emit('click', event)
        }
      }
    },
    computed: {
      classes () {
        return [
          this.$style.button,
          { [this.$style.disabled]: this.disabled }
        ]
      },
      routeTo () {
        return this.$i18n.createPath(this.to)
        // if (this.$root.$i18n.locale === this.$root.$i18n.defaultLocale) {
        //   return to
        // } else {
        //   return `/${this.$root.$i18n.locale}${to}`
        // }
        // let to = this.to
        // if (this.to.includes('#')) {
        //   to = to.replace(/\/#/, '#').replace(/#/, '/#')
        // } else {
        //   to = this.to.replace(/\/$/, '') + '/'
        // }
        // return `/${this.$root.$i18n.locale}${to}`
      }
    }
  }
</script>

<style lang="scss" module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all $transition-duration;
  user-select: none;

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
