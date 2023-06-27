<template>
  <div id="app" >
    <h1>{{ title }}</h1>
<MainButton type="button" @click="increment">Click me</MainButton>
<DirectivesTest></DirectivesTest>
  </div>
</template>

<script>

import MainButton from './components/Button.vue'
import DirectivesTest from './components/DirectivesTest.vue'

export default {
  name: 'App',
  components: {
    MainButton,
    DirectivesTest
  },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks +=1
    }
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
