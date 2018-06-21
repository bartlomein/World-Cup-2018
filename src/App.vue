<template>
  <div id="app">
    <div class = "title-header"><h1>World Cup 2018<br> </h1><h2>Group Stage</h2></div>
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
  margin-top: 20px;
}

.title-header{

   background-color: #f9f9f9;
  border-radius:10px;
  padding:20px;
  max-width:400px;
  margin:0 auto;
  box-shadow: 10px 10px 20px gray;
}
h1{
  font-size:40px;
  margin:10px;
}
h2{
  margin:10px;
}
</style>
