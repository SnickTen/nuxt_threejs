<template>
  <button :class="classes" @click="onClick">
    <span :class="$style.line"></span>
    <span :class="$style.line"></span>
    <span :class="$style.line"></span>
  </button>
</template>

<script>
  export default {
    name: 'UiBurger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          this.$style.burger,
          { [this.$style.open]: this.isActive }
        ]
      }
    },
    methods: {
      onClick(event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss" module>
  .burger {
    display: flex;
    flex-direction: column;
    width: 2em;
    height: 2.4em;
    justify-content: space-around;
    padding: 0.3em 0;
    @include down (md) {
      width: 2.4em;
      height: 2.7em;
    }
  }
  .line {
    position: relative;
    height: 2px;
    width: 100%;
    flex-shrink: 0;
    display: block;
    background-color: var(--root-color-bg);
    transition: transform .2s ease-in-out, top .2s ease, opacity .2s ease-in-out;
    transform-origin: 50% 50%;
    top: 0;
  }
  .open:not(.change) {
    .line:nth-child(1) {
      transform: rotate(45deg);
      margin-left: 0;
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) ;
      margin-left: 0;
    }
  }

  .open {
    .line:nth-child(1) {
      top: 1rem;
      @include down (md) {
        top: 0.7rem
      }
    }
    .line:nth-child(3) {
      top: -1rem;
      @include down (md) {
        top: -0.7rem
      }
    }
  }
</style>
