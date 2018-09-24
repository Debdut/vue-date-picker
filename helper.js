export function isLeapYear (year) {
  if (year % 4 !== 0) {
    return false
  } else if (year % 100 !== 0) {
    return true
  } else if (year % 400 !== 0) {
    return false
  }
  return true
}

export function numDaysInMonths (month, year) {
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

export function getMonthCalendar (month, year) {
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
