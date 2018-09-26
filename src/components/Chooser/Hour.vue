<template lang="pug">
  .hour-chooser
    .current-time {{ scopedHour }}
    .numbers
      span(v-for="i in 24") {{ i - 1 }}
      .container
        .dot
</template>

<script>

export default {
  props: {
    hour: Number
  },
  data () {
    return {
      scopedHour: this.hour
    }
  },
  // methods: {
  //   rotate () {
  //   }
  // },
  mounted () {
    this.$el.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        if (this.scopedHour === 23) {
          this.scopedHour = 0
        } else {
          this.scopedHour += 1
        }
      } else {
        if (this.scopedHour === 0) {
          this.scopedHour = 23
        } else {
          this.scopedHour -= 1
        }
      }
      this.rotate()
      this.$emit('update:hour', this.scopedHour)
    })
  },
  destroyed () {
    this.$el.removeEventListener('wheel', this.scopedHour)
  }
}
</script>

<style lang="sass" scoped>
.hour-chooser
  position: relative
  .current-time
    position: absolute
    height: 100px
    transform: translateY(100%)
  .numbers
    .container
      height: 100px
      top: 0
      left: 0
      transform-origin: 0 100%
      transform: rotate(75deg)
      .dot
        position: absolute
        width: 10px
        height: 10px
        border-radius: 50%
        background-color: black
    span
      height: 100px
      position: absolute
      top: 0
      left: 0
      transform-origin: 0 100%
      @for $hour from 1 through 24
        &:nth-child(#{$hour})
          transform: rotate(#{15 * ($hour - 1)}deg)
</style>
