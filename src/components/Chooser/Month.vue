<template lang="pug">
  div
    .month-chooser
      table
        tr(v-for="row in 4")
          td(v-for="item in 3") {{ months[(row - 1) * 3 + item - 1] | tripleCharacter }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
</style>
