<template>
  <div class="days">
    
     <span class="rounds" v-for="(round, index) in rounds" :key="index">
      <div class = "june-days" >June {{days[index]}} <hr></div>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.days {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(100px, auto);
  text-align: left;

  grid-column-gap: 20px;
  grid-row-gap: 10px;
}

.rounds {
  
  padding: 30px 30px 20px 30px;
  margin: 10px;
  box-shadow: 10px 10px 20px gray;
  background-color: #f9f9f9;
  border-radius:10px;
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
}

.tie-color {
  color: red;
}
</style>
