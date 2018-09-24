<template lang="pug">
  .year-chooser
    ul
      li(v-for="i in 9") {{ scopedYear + i - 1 }}
</template>

<script>
export default {
  props: {
    year: Number
  },
  data () {
    return {
      scopedYear: this.year
    }
  },
  mounted () {
    this.$el.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        this.scopedYear += 1
      } else {
        this.scopedYear -= 1
      }
      this.$emit('update:year', this.scopedYear)
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
