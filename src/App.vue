<template lang="pug">
  #app
    //- date-picker(:options="{ type: 'monthPicker' }")
    //- customInput
    Picker
</template>

<script>
import DatePicker from './components/DatePicker'
import CustomInput from './components/CustomInput'
import Picker from './components/Picker'

export default {
  name: 'app',
  components: {
    DatePicker,
    CustomInput,
    Picker
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
  // margin-left: 300px
  margin-right: 300px
</style>
