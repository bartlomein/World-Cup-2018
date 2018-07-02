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
      <div class="tournament__match" v-if="sixteen.matches[0]" @click="sendData(sixteen.matches[0]), show(),formatDate(match)" >
        <a class="tournament__match__team clickable" >{{sixteen.matches[0].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[0].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match" @click="sendData(sixteen.matches[1]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[1].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[1].team2.name}}</a>
      </div>
      <div class="tournament__match" @click="sendData(sixteen.matches[2]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[2].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[2].team2.name}}</a>
      </div>
      <div class="tournament__match" @click="sendData(sixteen.matches[3]), show(),formatDate(match)" >
        <a class="tournament__match__team clickable" >{{sixteen.matches[3].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[3].team2.name}}</a>
      </div>
      <div class="tournament__match" @click="sendData(sixteen.matches[4]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[4].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[4].team2.name}}</a>
      </div>
      <div class="tournament__match" @click="sendData(sixteen.matches[5]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[5].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[5].team2.name}}</a>
      </div>
      <div class="tournament__match" v-if="sixteen.matches[6]" @click="sendData(sixteen.matches[6]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[6].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[6].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match" v-if="sixteen.matches[7]" @click="sendData(sixteen.matches[7]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{sixteen.matches[7].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{sixteen.matches[7].team2.name}}</a>
      </div>
      <div class="tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    
    <div class="tournament__round tournament__round--first-round">
      <div class = "label"><h2>Quarterfinal</h2></div>
      <div class="tournament__match tournament__match" v-if="eight.matches[0]" @click="sendData(eight.matches[0]), show(),formatDate(match)" >
        <a class="tournament__match__team clickable" >{{eight.matches[0].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{eight.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[1]" @click="sendData(eight.matches[1]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{eight.matches[1].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{eight.matches[1].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[2]" @click="sendData(eight.matches[2]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{eight.matches[2].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{eight.matches[2].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
       <div class="tournament__match tournament__match" v-if="eight.matches[3]" @click="sendData(eight.matches[3]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{eight.matches[3].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{eight.matches[3].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" v-else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      
      
    </div>

    <!-- tournament__round 1/2 -->
    <div class="tournament__round">
      <div class = "label"><h2>Semifinal</h2></div>
      <div class="tournament__match tournament__match" v-if="semi.matches[0]" @click="sendData(semi.matches[0]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{semi.matches[0].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{semi.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
      <div class="tournament__match tournament__match" v-if="semi.matches[1]" @click="sendData(semi.matches[1]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{semi.matches[1].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{semi.matches[1].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round final -->
    <div class="tournament__round tournament__round--final">
      <div class = "label"><h2>Final</h2></div>
      <div class="tournament__match tournament__match" v-if="final.matches[0]" @click="sendData(final.matches[0]), show(),formatDate(match)">
        <a class="tournament__match__team clickable" >{{final.matches[0].team1.name}}</a>
        <a class="tournament__match__team clickable" >{{final.matches[0].team2.name}}</a>
      </div>
       <div class="tournament__match tournament__match" else>
        <a class="tournament__match__team" >TBD</a>
        <a class="tournament__match__team" >TBD</a>
      </div>
    </div>

    <!-- tournament__round winner -->
    <div class="tournament__round tournament__round--winner" v-if="final.matches[0]" @click="sendData(final.matches[0]), show(),formatDate(match)">
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


</div>

 <modal name="detailview"  classes="detail-modal" :adaptive="true" :maxHeight="800">
<div class="modal-details" v-if= "match">
  <div class = "detail-group">{{date}}</div>
  <div class = "modal-names-and-scores">
     <div class= "modal-team-one"> <div class = "modal-team-name">{{ match.team1.name }} </div>
        <div class = "score-one-goals" v-for="goal in match.goals1">
         <div class = "scorer-name"> {{goal.name}} <span class = "scorer-minute">{{goal.minute}}'</span></div>
          </div>
       </div> 
       <div class="modal-score-one"> {{match.score1}}
        
       </div> 
      <div class= "modal-score-two">{{match.score2}} </div> 
      <div class = "modal-team-two"> <div class = "modal-team-name"> {{ match.team2.name }} </div>
        <div class = "score-two-goals" v-for="goal in match.goals2">
          {{goal.name}} {{goal.minute}}'
          </div>
          
      </div>
      <div v-if="match.score1p">
        <div class = "pk">
          Penalties
          <div class="pk1">
            {{match.score1p}}
          </div>
          <div class="pk2">
            {{match.score2p}}
          </div>
        </div>
      </div>



  </div>
  <div class = "modal-time">Time: {{match.time}}  {{match.timezone}}
    <div class = "modal-city">City: {{match.city}}</div>
  
  </div>


  </div>
</modal>



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
      match:null,
      date:null


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

   },
   formatDate(match){
     this.date  = match.date.replace('2018-','').replace('-','/');
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
.clickable:hover {
cursor:pointer;
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
  background: #F0C330;
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
  color: #FB7374;
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
  color: #FEDB32;
}
.tournament__match__team:before, .tournament__match__team:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 999px;
  height: 2px;
  margin-top: -1px;
  background: #F0C330;
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
  width: 100%;
  height: 500px;

}

.modal-names-and-scores{
  font-size:36px;
  text-align:center;
  color:white;
  display:grid;

  grid-template-columns: 1.5fr 0.5fr 0.5fr 1.5fr;

  font-weight:bold;
}

.modal-details{
  padding:30px;

  background-color: #88D8BF;

  border-radius:10px;

  margin:0 auto;


}
.modal-time{
  text-align:center;
  font-size:18px;
  color:white;
  margin-top:30px;
  font-weight:bold;
}
.modal-city{
  font-size:20px;
  font-weight:400;
  
}

.detail-group{
  display:flex;
  justify-content: center;
  color:white;
  font-size:24px;
}

.score-one-goals{
  font-size:14px;


  text-align:left;
}
.score-two-goals{
  font-size:14px;


  text-align:right;
}

.modal-team-name{
  margin-bottom:10px;

}
.modal-team-one{
  text-align:left;
}
.modal-team-two{
  text-align:right;
}
.pk{
  font-size:24px;

}
.pk1{
  text-align: left;
}

.pk2{
  text-align:right;
}






</style>
