<template>
  <div :class="$style.title">
    <span :class="$style.text" v-html="$options.filters.typograf(text)"></span>
  </div>
</template>

<script>
export default {
  name: 'UiTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.title {
  font-family: $font-family-title;
  text-transform: uppercase;
  .text {
    font-size: 4.9em;
    line-height: 1.25;
    @include down(md) {
      font-size: 3.1em;
      line-height: 1.26;
    }
  }
}
</style>
