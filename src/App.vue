<template>
  <div id="app">
    <div class = "title-header"><h1><router-link to="/">World Cup 2018</router-link><br> </h1><h2><router-link to="/group">Group</router-link><span> </span> <router-link to="/knockout">Knockout</router-link></h2></div>


       
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

  border-radius:10px;
  padding:10px 18px 10px 18px;
  max-width:400px;
  margin:0 auto;
  box-shadow: 5px 5px 20px gray;
  background: 	#2CA2FC;
  color:white;
  z-index: 999999999999;
}
h1{
  font-size:32px;
  margin:5px 5px 10px 5px;
  font-weight: bold;

}
h2{
  margin:5px;
  font-weight:bold;
    margin-top:20px;

}
.title-header a{
  margin-left:5px;
  margin-right:5px;

  padding:5px 10px 5px 10px; 
color:#C13C2A;
  text-decoration: none;

  background-color:snow;
  border-radius:10px;
  box-shadow:5px 5px 10px gray;



}



.title-header a:hover{

  box-shadow:6px 6px 21px;

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
