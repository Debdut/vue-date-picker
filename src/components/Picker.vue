<template lang="pug">
  div
    .current-time {{ currentDate.getHours() }} {{ currentDate.getMinutes() }}
    .current-date {{ currentDate.getDate() }} {{ currentDate.getMonth() + 1 }} {{ currentDate.getFullYear() }}
    .day-chooser
      table
        tr
          th(v-for="day in days") {{ day }}
        tr(v-for="week in (monthCalendar.length / 7)")
          td(v-for="day in 7") {{ monthCalendar[(week - 1) * 7 + day - 1] }}
    .month-chooser
      table
        tr(v-for="row in 4")
          td(v-for="item in 3") {{ months[(row - 1) * 3 + item - 1]}}
    .year-chooser
      table
        tr(v-for="row in 4")
          td(v-for="item in 3") {{ years[(row - 1) * 3 + item - 1] }}
</template>

<script>
function isLeapYear (year) {
  if (year % 4 !== 0) {
    return false
  } else if (year % 100 !== 0) {
    return true
  } else if (year % 400 !== 0) {
    return false
  }
  return true
}

function numDaysInMonths (month, year) {
  if ([0, 2, 4, 6, 7, 9, 11].indexOf(month) > -1) {
    return 31
  } else if ([3, 5, 8, 10].indexOf(month) > -1) {
    return 30
  }
  if (isLeapYear(year)) {
    return 29
  }
  return 28
}

function getMonthCalendar (month, year) {
  const firstDayOfMonth = new Date(year, month)
  // Filling up the month days in the calendar array
  let calendar = Array(numDaysInMonths(month, year)).fill(0).map((element, index) => index + 1)
  const daysInLastMonth = numDaysInMonths((month - 1 + 12) % 12, year)
  // Adding days of previous month in the calenday array
  calendar = Array(firstDayOfMonth.getDay()).fill(0).map((element, index) => daysInLastMonth - firstDayOfMonth.getDay() + index + 1).concat(calendar)
  // Adding days of next month in the calendar array
  calendar = calendar.concat(Array(7 - (calendar.length % 7)).fill(0).map((element, index) => index + 1))
  return calendar
}

function getYearCalendar (year) {
  return Array(12).fill(year - 4).map((element, index) => element + index)
}

export default {
  data () {
    return {
      year: 2018,
      month: 0,
      months: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'],
      day: 1,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  computed: {
    monthCalendar () {
      return getMonthCalendar(this.month, this.year)
    },
    years () {
      return getYearCalendar(this.year)
    },
    monthName () {
      return this.months[this.month]
    },
    currentDate () {
      var today = new Date()
      return today
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
