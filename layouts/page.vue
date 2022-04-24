<template>
  <div :class="$style.page">
    <common-header :data="appData.menu" :class="$style.header" />

    <div :class="$style.content">
      <Nuxt />
    </div>

    <common-footer :data="appData" :class="$style.footer" />
  </div>
</template>

<script>
import CommonHeader from '~/components/common/header'
import CommonFooter from '~/components/common/footer'
import { mapState } from 'vuex'

export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  computed: {
    ...mapState('app', { appData: 'data' })
  }
}
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;
  min-height: vh(100);
}

.header {
  position: fixed;
  z-index: map-get($z-index, "header");
  top: 0;
  left: 0;
  right: 0;
}

.content {
  flex-grow: 1;
}

.footer {
  position: relative;
}
</style>
