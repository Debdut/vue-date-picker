<template lang="pug">
  .date-picker
    year(:year="year")
</template>

<script>
// import Day from './Chooser/Day'
// import Month from './Chooser/Month'
import Year from './Chooser/Year'
// import Hour from './Chooser/Hour'
// import Minute from './Chooser/Minute'
// import Second from './Chooser/Second'

const now = new Date()

export default {
  components: {
    // Day,
    // Month,
    Year,
    // Hour,
    // Minute,
    // Second
  },
  data () {
    return {
      day: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
