<template lang="pug">
  .date-picker
    template(v-if="options.chooser.includes('day')")
      day(:month="month" :year="year")
    template(v-if="options.chooser.includes('month')")
      month(:month.sync="month")
    template(v-if="options.chooser.includes('year')")
      year(:year.sync="year")
    template(v-if="options.chooser.includes('hour')")
      hour(:hour.sync="hour")
    template(v-if="options.chooser.includes('minute')")
      minute(:minute.sync="minute")
    template(v-if="options.chooser.includes('second')")
      second(:second.sync="second")
</template>

<script>
import Day from './Chooser/Day'
import Month from './Chooser/Month'
import Year from './Chooser/Year'
import hour from './Chooser/Hour'
import minute from './Chooser/Minute'
import second from './Chooser/Second'

const now = new Date()

export default {
  props: {
    options: Object
  },
  components: {
    Day,
    Month,
    Year,
    hour,
    minute,
    second
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
