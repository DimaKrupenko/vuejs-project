<template>
  <div id="app" >
<MainButton type="button">Click me</MainButton>
  </div>
</template>

<script>

import MainButton from './components/Button.vue'

export default {
  name: 'App',
  components: {
    MainButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
