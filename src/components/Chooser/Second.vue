<template lang="pug">
  .second-chooser
    .current-time {{ scopedSecond }}
    .dot
    .numbers
      .second(v-for="i in 12")
        span(:class="{selected: (i * 5) === scopedSecond || (i * 5) < scopedSecond}") {{ i * 5 }}
</template>

<script>
export default {
  props: {
    second: Number
  },
  data () {
    return {
      scopedSecond: this.second
    }
  },
  mounted () {
    this.$el.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        if (this.scopedSecond >= 59) {
          this.scopedSecond = 0
        } else {
          this.scopedSecond += 1
        }
      } else {
        if (this.scopedSecond <= 0) {
          this.scopedSecond = 59
        } else {
          this.scopedSecond -= 1
        }
      }
      this.$emit('update:second', this.scopedSecond)
    })
  },
  destroyed () {
    this.$el.removeEventListener('wheel', null)
  }
}
</script>

<style lang="sass" scoped>
.second-chooser
  position: relative
  .current-time
    position: absolute
    height: 100px
    transform: translateY(100%)
  .dot
    height: 100px
    width: 100px
    border-radius: 100%
    color: #000
  .numbers
    .second
      height: 100px
      position: absolute
      top: 0
      left: 0
      transform-origin: 0 100%
      @for $second from 1 through 12
        &:nth-child(#{$second})
          transform: rotate(#{30 * $second}deg)
      .selected
        position: relative
        background: blue
        color: white
</style>
