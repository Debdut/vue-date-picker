<template lang="pug">
  .second-chooser
    ul
      li(v-for="i in 6") {{ scopedSecond + i - 1 }}
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
        if (this.scopedSecond >= 23) {
          this.scopedSecond = 0
        } else {
          this.scopedSecond += 1
        }
      } else {
        if (this.scopedSecond <= 0) {
          this.scopedSecond = 23
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
ul
  list-style-type: none
  li:nth-child(1)
    font-size: 30px
</style>
