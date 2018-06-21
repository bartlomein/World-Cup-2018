<template>
  <div class="days">

     <span class="rounds" v-for="round in rounds">
      <span class="matches" v-for="match in round.matches">
        <div class = "date"> {{match.date}}</div>
       <div class = "first-team" >{{match.team1.name}}: <span class = "score">{{match.score1}}</span> </div> <div class = "second-team">{{match.team2.name}}: <span class = "score">{{match.score2}}</span> </div>
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
      rounds: []
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
.rounds {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</style>
