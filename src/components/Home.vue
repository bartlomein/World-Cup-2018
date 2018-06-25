<template>
     <div class="home page">


         <div class = "welcome"> 
             <div class = "main-text">
             <h1>  World Cup 2018</h1>
         <h2>I created this page to learn more about Vue.js, CSS Grid and Rest APIs</h2>
         <h4>Feel free to browse the code at my Github</h4>
         <h5>Enjoy!</h5>
         </div>
          </div>
   
</div>
</template>


<script>

export default {
    
}
</script>



<style scoped>

@import url('https://fonts.googleapis.com/css?family=Dosis');

.home{
       height:100vh;

       
    
}
.logo1 img{
    position: absolute;
    z-index: -1;
    top:10;
    width: 30% !important;
    left:50px;
}
.welcome{
    z-index: 9999;
background: url('../assets/polishfans5.png');
background-size: cover;
display:flex;
justify-content: center;
align-items: center;
margin-top: 140px !important;
max-width: 70%;
margin: 0 auto;
padding:20px;
border-radius:5px;
box-shadow: 5px 5px 30px black;
color:white;

}
.welcome h1{
    color:lightcyan;

    font-weight:bold;
    font-size:80px;

}

</style>
