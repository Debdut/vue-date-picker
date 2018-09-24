<template lang="pug">
  div
    .hour-chooser(v-for="i in 23") {{ (scopedHour - i +23) % 23 }}
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
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
</style>
