<template lang="pug">
  div
    .day-chooser
      table
        tr
          th(v-for="day in days") {{ day | singleCharacter }}
        tr(v-for="week in (monthCalendar.length / 7)")
          td(v-for="day in 7") {{ monthCalendar[(week - 1) * 7 + day - 1] | doubleCharacter }}
</template>

<script>
</script>

<style lang="sass" scoped>
</style>
