<template lang="pug">
  .minute-chooser
    .current-time {{ scopedMinute }}
    .dot
    .numbers
      .minute(v-for="i in 12")
        span(:class="{selected: (i * 5) === scopedMinute}") {{ i * 5 }}
</template>

<script>
export default {
  props: {
    minute: Number
  },
  data () {
    return {
      scopedMinute: this.minute
    }
  },
  mounted () {
    this.$el.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        if (this.scopedMinute >= 59) {
          this.scopedMinute = 0
        } else {
          this.scopedMinute += 1
        }
      } else {
        if (this.scopedMinute <= 0) {
          this.scopedMinute = 59
        } else {
          this.scopedMinute -= 1
        }
      }
      this.$emit('update:minute', this.scopedMinute)
    })
  },
  destroyed () {
    this.$el.removeEventListener('wheel', null)
  }
}
</script>

<style lang="sass" scoped>
.minute-chooser
  position: relative
  .current-time
    position: absolute
    height: 100px
    transform: translateY(100%)
  .numbers
    .minute
      height: 100px
      position: absolute
      top: 0
      left: 0
      transform-origin: 0 100%
      @for $minute from 1 through 12
        &:nth-child(#{$minute})
          transform: rotate(#{30 * $minute}deg)
      .selected
        position: relative
        background: blue
        color: white
</style>
