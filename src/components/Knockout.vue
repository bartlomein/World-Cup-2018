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
    
   
    <div class="tournament__round tournament__round--first-round" >
        <div class = "label"><h2>Round of 16</h2></div>
      <div class="tournament__match" v-if="sixteen.matches[0]" @click="sendData(match), show()" >
        <a class="tournament__match__team" >{{sixteen.matches[0].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[0].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match" >
        <a class="tournament__match__team" >{{sixteen.matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[1].team2.name}}</a>
      </div>
      <div class="tournament__match" >
        <a class="tournament__match__team" >{{sixteen.matches[2].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[2].team2.name}}</a>
      </div>
      <div class="tournament__match" >
        <a class="tournament__match__team" >{{sixteen.matches[3].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[3].team2.name}}</a>
      </div>
      <div class="tournament__match" >
        <a class="tournament__match__team" >{{sixteen.matches[4].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[4].team2.name}}</a>
      </div>
      <div class="tournament__match" >
        <a class="tournament__match__team" >{{sixteen.matches[5].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[5].team2.name}}</a>
      </div>
      <div class="tournament__match" v-if="sixteen.matches[6]">
        <a class="tournament__match__team" >{{sixteen.matches[6].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[6].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match" v-if="sixteen.matches[7]">
        <a class="tournament__match__team" >{{sixteen.matches[7].team1.name}}</a>
        <a class="tournament__match__team" >{{sixteen.matches[7].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    
    <div class="tournament__round tournament__round--first-round">
      <div class = "label"><h2>Quarterfinal</h2></div>
      <div class="tournament__match tournament__match" v-if="eight.matches[0]">
        <a class="tournament__match__team" >{{eight.matches[0].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[1]">
        <a class="tournament__match__team" >{{eight.matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[1].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[2]">
        <a class="tournament__match__team" >{{eight.matches[2].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[2].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[3]">
        <a class="tournament__match__team" >{{eight.matches[3].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[3].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      
      
    </div>

    <!-- tournament__round 1/2 -->
    <div class="tournament__round">
      <div class = "label"><h2>Semifinal</h2></div>
      <div class="tournament__match tournament__match" v-if="semi.matches[0]">
        <a class="tournament__match__team" >{{eight.matches[0].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match tournament__match" v-if="eight.matches[1]">
        <a class="tournament__match__team" >{{eight.matches[1].team1.name}}</a>
        <a class="tournament__match__team" >{{eight.matches[1].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round final -->
    <div class="tournament__round tournament__round--final">
      <div class = "label"><h2>Final</h2></div>
      <div class="tournament__match tournament__match" v-if="final.matches[0]">
        <a class="tournament__match__team" >{{final.matches[0].team1.name}}</a>
        <a class="tournament__match__team" >{{final.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round winner -->
    <div class="tournament__round tournament__round--winner" v-if="final.matches[0]">
    <div class = "label"><h2>Champion</h2></div>
    <div class="tournament__match" >
        <a class="tournament__match__team" >{{final.matches[0].team1.name}}</a>
      </div>
      <div class="tournament__match" v-if="final.matches[0].score1 > final.matches[0].score2">
        <a class="tournament__match__team" >{{final.matches[0].team1.name}}</a>
      </div>
      <div class="tournament__match" v-else-if="final.matches[0].score1 < final.matches[0].score2">
        <a class="tournament__match__team" >{{final.matches[0].team2.name}}</a>
      </div>

    </div>
    <div class="tournament__round tournament__round--winner" v-else>
    <div class = "label"><h2>Champion</h2></div>
    
      <div class="tournament__match">
        <a class="tournament__match__team" >TBD</a>
      </div>
      
    </div>
  </div>




 <modal name="detailview"  classes="detail-modal" >
   <div class = "modal-bg">TEST</div>
  

</modal>

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
      sixteen: null,
      eight: null,
      semi:null,
      final:null,


    };
  },
 created() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.sixteen = response.data.rounds[15],this.eight = response.data.rounds[16],this.semi = response.data.rounds[17],this.final = response.data.rounds[19],this.champ = response.data.rounds[20]));
      



    
  },
   methods: {
  show () {
    this.$modal.show('detailview');
  },
  hide () {
    this.$modal.hide('detailview');
   },
   sendData(match){
     this.match = match;

   }
  },
    
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
.modal-bg{
  background-color:white;
  height:200px;
  width:400px;
}






</style>
