<template lang="pug">
    div
     input(type="text" name="name" class="search" id="nme" required autocomplete="off")
     label(for="nme")
        span Testing
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
input,
span,
label
  display: block
  margin: 5px
  padding: 5px
  border: none
input
  &:focus
    outline: 0
  &.search
    font-size: 20px
    font-weight: 300
    border-radius: 2px
    margin: 0
    border: none
    width: 100%
    background: rgba(0, 0, 0, 0)
    transition: padding-top 0.2s ease, margin-top 0.2s ease
    overflow-x: hidden

    & + label
      display: block
      position: relative
      white-space: nowrap
      padding: 0
      margin: 0
      width: 100%
      border-top: 1px solid red
      height: 0px

    &:focus + label
      width: 100%

    &:focus,
    &:valid
      padding-top: 35px

    &:focus + label > span,
    &:valid + label > span
      top: -55px
      font-size: 15px
      color: #333

    &:valid + label
      border-color: green

    & + label > span
      font-weight: 300
      margin: 0
      position: absolute
      color: #8F8F8F
      font-size: 20px
      top: -30px
      left: 0px
      z-index: -1
      -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease
      transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease
</style>
