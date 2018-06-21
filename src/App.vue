<template>
  <div id="app">
    <Days/>
  </div>
</template>

<script>
import Days from './components/Days.vue'

export default {
  name: 'app',
  components: {
    Days
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
