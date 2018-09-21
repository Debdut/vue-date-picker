<template lang="pug">
  .date-picker
    input(:value="date" @click="select =! select")
    div(v-if="select" class="bottom ta-center grey lighten-4 pt-5")
      .current-date(class="grid-col-1 blue-text darken-2")
        div(class="month fs-13") September
        div(class="date pt-10 fs-40") 13
        div(class="day") {{ days[4] }}
      .date-chooser(class="grid-col-2")
        div(class="month-year-select ta-center blue-text")
          span(@click="setPreviousMonth" class="grid-col-1")
            i(class="fa fa-caret-left" aria-hidden="true")
          div(class="grid-col-2")
            span(@click="calendarView = 'month'" class="mr-2") {{ monthName }}
            span(@click="calendarView = 'year'") {{ year }}
          span(@click="setNextMonth" class="grid-col-3")
            i(class="fa fa-caret-right" aria-hidden="true")
        .day-chooser(v-if="calendarView === 'day'")
          table(v-wheel="scrollMonth" class="ta-center full-width")
            tr
              th(v-for="day in days") {{ day | singleCharacter }}
            tr(v-for="week in (monthCalendar.length / 7)")
              td(v-for="day in 7"
              class="yellow-text"
              @click="setDay(week ,monthCalendar[(week - 1) * 7 + day - 1])"
              :class="{blue: (week === 1 && monthCalendar[day - 1] > 20) || ((monthCalendar.length / 7) === week && monthCalendar[(week - 1) * 7 + day - 1] < 20), red: day === 7 || day === 1}") {{ monthCalendar[(week - 1) * 7 + day - 1] | doubleCharacter }}
        .month-chooser(v-if="calendarView === 'month'")
          table(class="full-width")
            tr(v-for="row in 4")
              td(v-for="item in 3" @click="setMonth((row - 1) * 3 + item - 1)" class="ta-center") {{ months[(row - 1) * 3 + item - 1] | tripleCharacter }}
        .year-chooser(v-if="calendarView === 'year'")
          table(v-wheel="scrollYear" class="ta-center full-width")
            tr(v-for="row in 4")
              td(v-for="item in 3" @click="setYear(years[(row - 1) * 3 + item - 1])") {{ years[(row - 1) * 3 + item - 1] }}
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
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      calendarView: 'day',
      select: false,
      yearInScroll: 2018,
      selectedDate: null
    }
  },
  props: {
    options: Object
  },
  computed: {
    monthCalendar () {
      return getMonthCalendar(this.month, this.year)
    },
    years () {
      return getYearCalendar(this.yearInScroll)
    },
    monthName () {
      return this.months[this.month]
    },
    date () {
      return `${this.day} / ${this.month + 1} / ${this.year}`
    }
  },
  methods: {
    setDay (week, value) {
      if (week === 1 && value < 20) {
        this.day = value
        this.select = false
      } else if (week === 1 && value > 20) {
        if (this.month === 0) {
          this.month = 11
          this.year -= 1
        } else {
          this.month -= 1
        }
      } else if ((week === 6 || week === 5) && value < 20) {
        if (this.month === 11) {
          this.month = 0
          this.year += 1
        } else {
          this.month += 1
        }
      } else {
        this.day = value
        this.select = false
      }
    },
    setMonth (value) {
      this.month = value
      this.calendarView = 'day'
    },
    setYear (value) {
      this.year = value
      this.calendarView = 'day'
    },
    setPreviousMonth () {
      if (this.month === 0) {
        this.month = 11
        this.year -= 1
      } else {
        this.month -= 1
      }
    },
    setNextMonth () {
      if (this.month === 11) {
        this.month = 0
        this.year += 1
      } else {
        this.month += 1
      }
    },
    scrollYear (e) {
      if (e.deltaY < 0) {
        this.yearInScroll -= 3
      } else {
        this.yearInScroll += 3
      }
    },
    scrollMonth (e) {
      if (e.deltaY > 0) {
        if (this.month === 0) {
          this.month = 11
          this.year -= 1
        } else {
          this.month -= 1
        }
      } else {
        if (this.month === 11) {
          this.month = 0
          this.year += 1
        } else {
          this.month += 1
        }
      }
    }
  },
  filters: {
    singleCharacter (value) {
      return value.slice(0, 1)
    },
    doubleCharacter (value) {
      let valueStr = value.toString()
      if (valueStr.length === 1) {
        return 0 + valueStr
      } else {
        return value
      }
    },
    tripleCharacter (value) {
      return value.slice(0, 3)
    }
  }
}
</script>

<style lang="sass" scoped>
.bottom
  display: grid
  grid-template-columns: 2fr 3fr
  position: absolute
  z-index: 1000
  height: 160px
  width: 250px
  .month-year-select
    display: grid
    grid-template-columns: auto 1fr auto
  .current-date
    display: grid
    grid-template-rows: 1fr 2fr 2fr
</style>
