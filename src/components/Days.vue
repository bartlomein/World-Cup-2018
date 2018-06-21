<template>
  <div class="days">
    <div class = "day-one">
      <div class = date>{{ info.data.rounds[0].matches[0].date }}
      </div>
      
    </div>
    <div class = "day-two"></div>
    <div class = "day-three"></div>
    <div class = "day-four"></div>
    <div class = "day-five"></div>
    <div class = "day-six"></div>
    <div class = "day-seven"></div>
    <div class = "day-eight"></div>
    <div class = "day-nine"></div>
    <div class = "day-ten"></div>
    <div class = "day-eleven"></div>
    <div class = "day-twelve"></div>
    <div class = "day-thirteen"></div>
    <div class = "day-fourteen"></div>
    <div class = "day-fifteen"></div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  //https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json

  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.info = response));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</style>
