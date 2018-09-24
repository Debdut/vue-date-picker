<template lang="pug">
  .minute-chooser
    ul
      li(v-for="i in 10") {{ scopedMinute + i - 1 }}
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
ul
  list-style-type: none
  li:nth-child(1)
    font-size: 30px
</style>
