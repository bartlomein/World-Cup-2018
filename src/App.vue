<template>
  <div id="app">
     <div class = "jerseys">
                 <img src="./assets/jersey-1.png" alt="" srcset="">
                 <img src="./assets/jersey-9.png" alt="" srcset="">
                 <img src="./assets/jersey-8.png" alt="" srcset="">
                 <img src="./assets/jersey-2.png" alt="" srcset="">
                 <img src="./assets/jersey-3.png" alt="" srcset="">
                 <img src="./assets/jersey-4.png" alt="" srcset="">
                 <img src="./assets/jersey-5.png" alt="" srcset="">
                 <img src="./assets/jersey-6.png" alt="" srcset="">
                 <img src="./assets/jersey-7.png" alt="" srcset="">
                 <img src="./assets/jersey-10.png" alt="" srcset="">
                 <img src="./assets/jersey-11.png" alt="" srcset="">
                 <img src="./assets/jersey-12.png" alt="" srcset="">
                 <img src="./assets/jersey-13.png" alt="" srcset="">
                 <img src="./assets/jersey-14.png" alt="" srcset="">
                 <img src="./assets/jersey-15.png" alt="" srcset="">

             </div>
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

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

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
  padding:10px 10px 10px 10px;
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
    margin-top:10px;

}
.title-header a{
  margin-left:5px;
  margin-right:5px;

  padding:5px 15px 5px 15px; 
color:#02203E;
  text-decoration: none;

  background-color:snow;
  border-radius:10px;
  box-shadow:3px 3px 10px gray;
  border: 3px solid white;



}



.title-header a:hover{



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

.jerseys{
  display: grid;
  grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-width: 100%;
    position:absolute;
  opacity: 0.5;
  top:0;
  z-index: -1;
}
.jerseys img{
    max-width:85%;



}

</style>
