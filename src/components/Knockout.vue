<template>
     <div class="knockout">
    <h1>Knockout Stage</h1>

    <div class="tournament">
  <!-- tournament logo -->
  <div class="tournament__logo-container tournament__logo-container--right">
    <strong class="tournament__logo tournament__logo--gold"></strong>
  </div>
  <div class="tournament__grid">
    <!-- tournament__round 1/8 -->
    <div class="tournament__round tournament__round--first-round">
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
    </div>

    <div class="tournament__round tournament__round--first-round">
      <div class="tournament__match tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >1 Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
    </div>

    <!-- tournament__round 1/2 -->
    <div class="tournament__round">
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
    </div>

    <!-- tournament__round final -->
    <div class="tournament__round tournament__round--final">
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
    </div>

    <!-- tournament__round winner -->
    <div class="tournament__round tournament__round--winner">
      <div class="tournament__match">
        <a class="tournament__match__team" >Lorem ipsum.</a>
      </div>
    </div>
  </div>

</div>
  </div>
</template>


<script>
export default {
    
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
.tournament {
  position: relative;
  min-height: 300px;
  padding: 30px 0 0;
}
.tournament__grid {
  font-size: 0;
  line-height: 0;
  display: flex;
  align-items: stretch;
  min-height: 400px;
}
.tournament__round {
  position: relative;
  flex: 1 0;
  overflow: hidden;
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
  background: rgba(0, 0, 0, .2);
  top: 25%;
  bottom: 25%;
}
.tournament__round--winner .tournament__match:after, .tournament__round--end-point .tournament__match:after {
  display: none;
}
.tournament__match__team {
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease;
  color: #ccc;
  text-decoration: none;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .2);
  display: block;
  position: relative;
  width: auto;
  height: 32px;
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
  background: rgba(0, 0, 0, .2);
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
