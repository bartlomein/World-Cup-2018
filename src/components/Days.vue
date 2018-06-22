<template>
<div class="days">
   <span class="rounds" v-for="(round, index) in rounds" :key="index">
      <div class = "june-days" >
         June {{days[index]}} 
         <hr>
      </div>
      <div class = "all-matches">
      <span class="matches" v-for="match in round.matches" :key="match.id">
         <div class="game" v-if="match.score1>match.score2">
            <div class="first-team bold">{{match.team1.name}}:
               <span class="score bold">{{match.score1}}</span>
            </div>
            <div class="second-team">{{match.team2.name}}:
               <span class="score">{{match.score2}}</span>
            </div>
         </div>
         <div class="game" v-else-if="match.score1<match.score2">
            <div class="first-team ">{{match.team1.name}}:
               <span class="score">{{match.score1}}</span>
            </div>
            <div class="second-team bold">{{match.team2.name}}:
               <span class="score bold">{{match.score2}}</span>
            </div>
         </div>
         <div class="game" v-else>
            <div class="first-team ">{{match.team1.name}}:
               <span class="score">{{match.score1}}</span>
            </div>
            <div class="second-team ">{{match.team2.name}}:
               <span class="score">{{match.score2}}</span>
            </div>
         </div>
      </span>
      </div>
   </span>
</div>
</template>

<script>

import axios from "axios";

export default {
  //https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json

  data() {
    return {
      rounds: [],
      days: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.rounds = response.data.rounds));
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.days {
  display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  text-align: left;

  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.rounds {
  
  padding: 30px 30px 20px 30px;
  margin: 10px;
  box-shadow:0 4px 36px rgba(50,50,93,.11), 0 1px 33px rgba(0,0,0,.08);
  background-color: #f9f9f9;
  border-radius:5px;
}
.all-matches{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  

}

.game{
  border:solid 1px #D3D3D3;
  background-color:#4db3ff;
  box-shadow:0 4px 8px rgba(32,160,255,.3);
  padding:5px;
  border-radius:3px;
  font-size:16px;
  color:white;
}

.rounds:first-of-type{
  height:135px;
  padding-top:130px;
}
.rounds:nth-of-type(16) {
  display: none;
}
.rounds:nth-of-type(17) {
  display: none;
}
.rounds:nth-of-type(18) {
  display: none;
}
.rounds:nth-of-type(19) {
  display: none;
}
.rounds:nth-of-type(20) {
  display: none;
}
.game {
  margin-bottom: 10px;
}

.june-days {
  font-size: 30px;
}
.bold {
  font-weight: bold;
  font-size:17px;
}

.tie-color {
  color: red;
}
</style>
