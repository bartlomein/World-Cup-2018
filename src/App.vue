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
background: linear-gradient(315deg,#fc00aa,#00dbde)
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
  position:absolute;
  top:5px;
   background-color: #f9f9f9;
  border-radius:10px;
  padding:10px 40px 10px 40px;
  max-width:400px;
  margin:0 auto;
  box-shadow: 5px 5px 20px gray;
  background: linear-gradient(to right, rgb(69, 127, 202), rgb(86, 145, 200));
  color:white;
}
h1{
  font-size:38px;
  margin:5px;
  font-weight: bold;
}
h2{
  margin:5px;
  font-weight:bold;
}
</style>
