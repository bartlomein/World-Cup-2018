<template>
  <div class="days">
    <div class = "day-one">

     <div class="rounds" v-for="round in rounds">
      <div class="matches" v-for="match in round.matches">
       <div class= "date">{{match.name}} </div>
       </div>

        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json

  data() {
    return {
      rounds: [],
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

  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</style>
