<template lang="pug">
  .date-picker
    input(:value="date" @click="select =! select")
    .date-chooser(v-if="select")
      span(@click="calendarView = 'day'") {{ day }}
      span(@click="calendarView = 'month'") {{ monthName }}
      span(@click="calendarView = 'year'") {{ year }}
      .day-chooser(v-if="calendarView === 'day'")
        table
          tr
            each day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']
              th= day
          tr(v-for="week in (monthCalendar.length / 7)")
            td(v-for="day in 7"
            class="yellow"
            @click="setDay(week ,monthCalendar[(week - 1) * 7 + day - 1])"
            :class="{blue: (week === 1 && monthCalendar[day - 1] > 20) || ((monthCalendar.length / 7) === week && monthCalendar[(week - 1) * 7 + day - 1] < 20), red: day === 7 || day === 1}") {{ monthCalendar[(week - 1) * 7 + day - 1] | doubleCharacter }}
      .month-chooser(v-if="calendarView === 'month'")
        table
          tr(v-for="row in 4")
            td(v-for="item in 3" @click="setMonth((row - 1) * 3 + item - 1)") {{ months[(row - 1) * 3 + item - 1] | tripleCharacter }}
      .year-chooser(v-if="calendarView === 'year'")
        table
          tr(v-for="row in 3")
            td(v-for="item in 3" @click="setYear(yearArray[(row - 1) * 3 + item - 1])") {{ yearArray[(row - 1) * 3 + item - 1] }}
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
  let matrixArray = Array(9).fill(year - 4).map((element, index) => element + index)
  return matrixArray
}

export default {
  data () {
    return {
      year: 2018,
      month: 0,
      months: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'],
      day: 1,
      calendarView: 'day',
      select: false
    }
  },
  computed: {
    monthCalendar () {
      return getMonthCalendar(this.month, this.year)
    },
    yearArray () {
      return getYearCalendar(this.year)
    },
    monthName () {
      return this.months[this.month]
    },
    date () {
      return `${this.day}/${this.month + 1}/${this.year}`
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
    }
  },
  filters: {
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
.yellow
  color: yellow
.red
  color: red
.blue
  color: blue
</style>
