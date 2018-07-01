<template>
  <div id="app">
    <div class = "title-header">
      <h1>
        <router-link to="/">World Cup 2018</router-link><br>
      </h1>
      <h2>Stages: 
        <router-link to="/group">Group</router-link>
        <router-link to="/knockout">Knockout</router-link>
      </h2>
    </div>

    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  background: linear-gradient(315deg, rgb(252, 0, 170), rgb(0, 219, 222));
  margin:0;
}
#app {
  font-family: 'IBM Plex Sans', sans-serif, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title-header{
  background-color: #f9f9f9;
  padding:10px 40px 10px 40px;
  width:100%;
  margin:0 0 15px 0;
  background: linear-gradient(to right, rgb(69, 127, 202), rgb(86, 145, 200));
  color:white;
  z-index: 999999999999;
}

h1{
  font-size:32px;
  margin:5px 5px 5px 5px;
  font-weight: bold;
}

h2{
  margin:5px;
  font-weight:500;
}

h4 {
  font-weight: 300;
}

.title-header a{
  margin-left:5px;
  margin-right:5px;
  padding:5px;
  color:white;
  text-decoration: none;
}



.title-header a:hover{
  text-decoration: underline;
  color:#FEDB32;
}
@media screen and (max-width: 370px){

  .title-header h1{
    font-size:34px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
