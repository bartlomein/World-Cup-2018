<template>
<div class="days">
   <span class="rounds" v-for="(round, index) in rounds" :key="index">
      <div class = "june-days" >
         June {{days[index]}} 

         <hr>
      </div>
      <div class = "all-matches">
      <span class="matches"  v-for="match in round.matches" :key="match.id">
        
         <div class="game" @click="sendData(match), show()" v-if="match.score1>match.score2">
            <div class="first-team bold">{{match.team1.name}}:
               <span class="score bold">{{match.score1}}</span>
               
            </div>
            <div class="second-team">{{match.team2.name}}:
               <span class="score">{{match.score2}}</span>
      
            </div>

         </div>
         <div class="game" @click="sendData(match), show()" v-else-if="match.score1<match.score2">
            <div class="first-team ">{{match.team1.name}}:
               <span class="score">{{match.score1}}</span>
               
            </div>
            <div class="second-team bold">{{match.team2.name}}:
               <span class="score bold">{{match.score2}}</span>
            </div>

         </div>
         <div class="game" @click="sendData(match), show()" v-else>
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


 <modal name="detailview"  classes="detail-modal">
<div class="modal-details" v-if= "match">
  <div class = "detail-group">{{match.group}}</div>
  <div class = "modal-names-and-scores">
     <div class= "modal-team-one"> <div class = "modal-team-name">{{ match.team1.name }} </div>
        <div class = "score-one-goals" v-for="goal in match.goals1">
         <span class = "scorer-name"> {{goal.name}}</span>,  <span class = "scorer-minute">{{goal.minute}}'</span>
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


  </div>
  <div class = "modal-time">Time: {{match.time}} UTC
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

  data() {
    return {
      rounds: [],
      days: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      match:null,



    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      )
      .then(response => (this.rounds = response.data.rounds));


    
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




  
};
</script>


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

.game:hover{
  background-color:rgba(32,160,255,1);
  cursor:pointer;
}

.game{

  background-color:#4db3ff;
  box-shadow:0 4px 8px rgba(32,160,255,.3);
  padding:5px;
  border-radius:3px;
  font-size:16px;
  color:white;
}
/*MODAL*/
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
  box-shadow:10px 10px 30px rgba(50,50,93,.11), 0 1px 33px rgba(0,0,0,.08);
  border-radius:10px;
  max-width:80%;
  margin:0 auto;


}
.modal-time{
  text-align:center;
  font-size:18px;
  color:white;
  margin-top:50px;
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









.rounds:first-of-type{
  height:140px;
  padding-top:105px;
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
