<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Btn>Click Me</Btn>
</template>

<script>
import Btn from './components/Button'

export default {
  name: 'App',
  components: {
   Btn
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
