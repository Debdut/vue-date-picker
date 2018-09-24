<template lang="pug">
    div
        .minute-chooser(v-for="minute in 13") {{ (minute - 1) * 5 }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
</style>
