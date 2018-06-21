<template>
  <div id="app">
    <Days/>
  </div>
</template>

<script>
import Days from './components/Days.vue'

export default {
  name: 'days',
  components: {
    Days
  }
}
</script>

<style>
body{
background: linear-gradient(90deg, rgba(59,254,201,1) 12%, rgba(40,173,230,1) 100%);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
