<template>
    <div class="home page">
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    margin-top:-125px;
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
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
    padding:20px;
    border-radius:5px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.4);
    color:white;
}
.welcome h1{
    color:lightcyan;
    font-weight:700;
    font-size:80px;
}

.main-text a{
    color:white;
}
</style>
