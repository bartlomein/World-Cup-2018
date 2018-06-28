<template>
     <div class="knockout">
    <h1></h1>

    <div class="tournament">
  <!-- tournament logo -->
  <div class="tournament__logo-container tournament__logo-container--right">
    <strong class="tournament__logo tournament__logo--gold"></strong>
  </div>
  <div class="tournament__grid">
    <!-- tournament__round 1/8 -->
    
    <div class="tournament__round tournament__round--first-round" v-if="sixteen">
        <div class = "label"><h2>Round of 16</h2></div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[3].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
    </div>
    <div class="tournament__round tournament__round--first-round" v-else>
        <div class = "label"><h2>Round of 16</h2></div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <div class="tournament__round tournament__round--first-round" v-if="eight">
      <div class = "label"><h2>Quarterfinal</h2></div>
      <div class="tournament__match tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{rounds[2].matches[1].team1.name}}</a>
      </div>
      
      
    </div>
    <div class="tournament__round tournament__round--first-round" v-else>
      <div class = "label"><h2>Quarterfinal</h2></div>
      <div class="tournament__match tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      
      
    </div>

    <!-- tournament__round 1/2 -->
    <div class="tournament__round">
      <div class = "label"><h2>Semifinal</h2></div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round final -->
    <div class="tournament__round tournament__round--final">
      <div class = "label"><h2>Final</h2></div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round winner -->
    <div class="tournament__round tournament__round--winner">
    <div class = "label"><h2>Champion</h2></div>
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>
  </div>

</div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  //https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json

    //{{rounds[16].matches[1].team1.name}}
  data() {
    return {
      rounds: [],
      match:null,
    };
  },
  beforeMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.rounds = response.data.rounds));


    
  }
    
}
</script>



<style scoped>

.knockout{
    display: inline;
     height:100vh;
}

.bracket{
    margin-top:80px;
}
body {
  background: #383738;
}
.label{
  font-size:16px;
  color: white;
  padding:20px;
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
  margin:10px;
  border-radius:10px;
  box-shadow:10px 10px 20px #333;
}
.tournament {
  margin-top:100px;

  min-height: 300px;
  padding: 30px 0 0;
}
.tournament__grid {
  font-size: 0;
  line-height: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: minmax(100px, auto);

  align-items: stretch;
  min-height: 400px;
}
.tournament__round {

  flex: 1 0;
  display: flex;
  flex-direction: column;
}
.tournament__match {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: center;
  min-height: 100px;
}
.tournament__match:first-child {
  margin: 0 !important;
}
.tournament__round--first-round .tournament__match {
  padding-left: 0;
}
.tournament__round--winner .tournament__match {
  padding-right: 0;
  height: 32px;
}
.tournament__match:after {
  content: '';
  position: absolute;
  right: 0;
  width: 2px;
  background: salmon;
  top: 25%;
  bottom: 25%;
}
.tournament__round--winner .tournament__match:after, .tournament__round--end-point .tournament__match:after {
  display: none;
}
.tournament__match__team {
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
  color: #FF4136;
  text-decoration: none;
  box-sizing: border-box;
  background-color:white;
  box-shadow:3px 3px 10px black;
    border-radius:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;;
  height: 40px;
  line-height: 32px;
  padding: 0 36px 0 36px;
  margin: auto;
}
.tournament__match__team:focus, .tournament__match__team:hover {
  color: #fff;
}
.tournament__match__team:before, .tournament__match__team:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 999px;
  height: 2px;
  margin-top: -1px;
  background: salmon;
}
.tournament__match__team:after {
  left: 100%;
}
.tournament__round:last-child .tournament__match__team:after, .tournament__round--end-point .tournament__match__team:after {
  display: none;
}
.tournament__match__team:before {
  right: 100%;
}
.tournament__round:first-child .tournament__match__team:before {
  display: none;
}
.tournament__match__team.tournament__match__team--no-prev-round:before {
  display: none;
}
.vhidden {
  visibility: hidden;
}


/*
 *  Flex Layout Specifics
*/




</style>
