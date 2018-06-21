<template>
  <div class="days">
    
     <span class="rounds" v-for="(round, index) in rounds" >
      <div class = "june-days" >June {{days[index]}} </div>
      <span class="matches" v-for="match in round.matches" :key="match.id">
        
        <div class = "game">
       <div class = "first-team" >{{match.team1.name}}: <span class = "score">{{match.score1}}</span> </div> <div class = "second-team">{{match.team2.name}}: <span class = "score">{{match.score2}}</span> 
       </div>
       </div>
       </span>
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
      days: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    };
   
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.rounds = response.data.rounds));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.days {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(100px, auto);
  text-align: left;
}

.game{
  margin-bottom: 10px;
}
</style>
