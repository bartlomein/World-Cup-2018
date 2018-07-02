<template>
     <div class="home page">

 <div class = "jerseys">
                 <img src="../assets/jersey-1.png" alt="" srcset="">
                 <img src="../assets/jersey-9.png" alt="" srcset="">
                 <img src="../assets/jersey-8.png" alt="" srcset="">
                 <img src="../assets/jersey-2.png" alt="" srcset="">
                 <img src="../assets/jersey-3.png" alt="" srcset="">
                 <img src="../assets/jersey-4.png" alt="" srcset="">
                 <img src="../assets/jersey-5.png" alt="" srcset="">
                 <img src="../assets/jersey-6.png" alt="" srcset="">
                 <img src="../assets/jersey-7.png" alt="" srcset="">
                 <img src="../assets/jersey-10.png" alt="" srcset="">
                 <img src="../assets/jersey-11.png" alt="" srcset="">
                 <img src="../assets/jersey-12.png" alt="" srcset="">
                 <img src="../assets/jersey-13.png" alt="" srcset="">
                 <img src="../assets/jersey-14.png" alt="" srcset="">

             </div>
         <div class = "welcome"> 
             
             <div class = "main-text">
             <h1>  World Cup 2018</h1>
         <h2>I created this page to learn more about Vue.js, CSS Grid and Rest APIs</h2>
         <h4>Feel free to browse the code at my <a href = "https://github.com/bartlomein/World-Cup-2018">Github</a></h4>
         <h3>Enjoy!</h3>
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
    z-index: 99999999999999;
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
background-size: cover;
display:flex;
justify-content: center;
align-items: center;
margin-top: 200px !important;
max-width: 70%;
margin: 0 auto;
padding:20px;
border-radius:5px;
box-shadow: 5px 5px 30px black;
color:white;
opacity: 0.97;

}
.welcome h1{
    color:lightcyan;

    font-weight:bold;
    font-size:80px;

}
.main-text a{
    color:white;
}
.jerseys{
  display: grid;
  grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  position: absolute;
  max-width: 100%;
  top:0;
  left: 750px;
  opacity: 0.6;
  z-index: -1;
}
.jerseys img{



}
</style>
