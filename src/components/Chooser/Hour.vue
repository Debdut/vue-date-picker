<template lang="pug">
  div
    .hour-chooser(v-for="hour in 24") {{ hour - 1 }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
</style>
