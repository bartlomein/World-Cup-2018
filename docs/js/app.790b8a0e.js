(function(t){function a(a){for(var s,m,i=a[0],_=a[1],o=a[2],r=0,u=[];r<i.length;r++)m=i[r],n[m]&&u.push(n[m][0]),n[m]=0;for(s in _)Object.prototype.hasOwnProperty.call(_,s)&&(t[s]=_[s]);l&&l(a);while(u.length)u.shift()();return c.push.apply(c,o||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],s=!0,i=1;i<e.length;i++){var _=e[i];0!==n[_]&&(s=!1)}s&&(c.splice(a--,1),t=m(m.s=e[0]))}return t}var s={},n={1:0},c=[];function m(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,m),e.l=!0,e.exports}m.m=t,m.c=s,m.d=function(t,a,e){m.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},m.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},m.t=function(t,a){if(1&a&&(t=m(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(m.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)m.d(e,s,function(a){return t[a]}.bind(null,s));return e},m.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return m.d(a,"a",a),a},m.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},m.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],_=i.push.bind(i);i.push=a,i=i.slice();for(var o=0;o<i.length;o++)a(i[o]);var l=_;c.push([5,0]),e()})({"4pjt":function(t,a,e){"use strict";var s=e("JHjZ"),n=e.n(s);n.a},5:function(t,a,e){t.exports=e("Vtdi")},"6W3C":function(t,a,e){},EDI0:function(t,a,e){},JHjZ:function(t,a,e){},Pf3K:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"title-header"},[e("h1",[e("router-link",{attrs:{to:"/"}},[t._v("World Cup 2018")]),e("br")],1),e("h2",[t._v("  Stages: "),e("router-link",{attrs:{to:"/group"}},[t._v("Group")]),e("span"),e("router-link",{attrs:{to:"/knockout"}},[t._v("Knockout")])],1)]),e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)},n=[],c=(e("VRzm"),{}),m=c,i=(e("ZL7j"),e("KHd+")),_=Object(i["a"])(m,s,n,!1,null,null,null);a["a"]=_.exports},QUBc:function(t,a,e){"use strict";var s=e("6W3C"),n=e.n(s);n.a},QctN:function(t,a,e){"use strict";var s=e("Kw5r"),n=e("jE9Z"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"days"},[t._l(t.rounds,function(a,s){return e("span",{key:s,staticClass:"rounds"},[e("div",{staticClass:"june-days"},[t._v("\n         June "+t._s(t.days[s])+" \n\n         "),e("hr")]),e("div",{staticClass:"all-matches"},t._l(a.matches,function(a){return e("span",{key:a.id,staticClass:"matches"},[a.score1>a.score2?e("div",{staticClass:"game",on:{click:function(e){t.sendData(a),t.show()}}},[e("div",{staticClass:"first-team bold"},[t._v(t._s(a.team1.name)+":\n               "),e("span",{staticClass:"score bold"},[t._v(t._s(a.score1))])]),e("div",{staticClass:"second-team"},[t._v(t._s(a.team2.name)+":\n               "),e("span",{staticClass:"score"},[t._v(t._s(a.score2))])])]):a.score1<a.score2?e("div",{staticClass:"game",on:{click:function(e){t.sendData(a),t.show()}}},[e("div",{staticClass:"first-team "},[t._v(t._s(a.team1.name)+":\n               "),e("span",{staticClass:"score"},[t._v(t._s(a.score1))])]),e("div",{staticClass:"second-team bold"},[t._v(t._s(a.team2.name)+":\n               "),e("span",{staticClass:"score bold"},[t._v(t._s(a.score2))])])]):e("div",{staticClass:"game",on:{click:function(e){t.sendData(a),t.show()}}},[e("div",{staticClass:"first-team "},[t._v(t._s(a.team1.name)+":\n               "),e("span",{staticClass:"score"},[t._v(t._s(a.score1))])]),e("div",{staticClass:"second-team "},[t._v(t._s(a.team2.name)+":\n               "),e("span",{staticClass:"score"},[t._v(t._s(a.score2))])])])])}))])}),e("modal",{attrs:{name:"detailview",classes:"detail-modal",adaptive:!0,maxHeight:800}},[t.match?e("div",{staticClass:"modal-details"},[e("div",{staticClass:"detail-group"},[t._v(t._s(t.match.group))]),e("div",{staticClass:"modal-names-and-scores"},[e("div",{staticClass:"modal-team-one"},[e("div",{staticClass:"modal-team-name"},[t._v(t._s(t.match.team1.name)+" ")]),t._l(t.match.goals1,function(a){return e("div",{staticClass:"score-one-goals"},[e("div",{staticClass:"scorer-name"},[t._v(" "+t._s(a.name)+" "),e("span",{staticClass:"scorer-minute"},[t._v(t._s(a.minute)+"'")])])])})],2),e("div",{staticClass:"modal-score-one"},[t._v(" "+t._s(t.match.score1)+"\n        \n       ")]),e("div",{staticClass:"modal-score-two"},[t._v(t._s(t.match.score2)+" ")]),e("div",{staticClass:"modal-team-two"},[e("div",{staticClass:"modal-team-name"},[t._v(" "+t._s(t.match.team2.name)+" ")]),t._l(t.match.goals2,function(a){return e("div",{staticClass:"score-two-goals"},[t._v("\n          "+t._s(a.name)+" "+t._s(a.minute)+"'\n          ")])})],2)]),e("div",{staticClass:"modal-time"},[t._v("Time: "+t._s(t.match.time)+"  "+t._s(t.match.timezone)+"\n    "),e("div",{staticClass:"modal-city"},[t._v("City: "+t._s(t.match.city))])])]):t._e()])],2)},m=[],i=(e("VRzm"),e("vDqi")),_=e.n(i),o={data:function(){return{rounds:[],days:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],match:null}},beforeMount:function(){var t=this;_.a.get("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json").then(function(a){return t.rounds=a.data.rounds})},methods:{show:function(){this.$modal.show("detailview")},hide:function(){this.$modal.hide("detailview")},sendData:function(t){this.match=t}}},l=o,r=(e("QUBc"),e("KHd+")),u=Object(r["a"])(l,c,m,!1,null,"c36d8c10",null),h=u.exports,d=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home page"},[e("div",{staticClass:"welcome"},[e("div",{staticClass:"main-text"},[e("h1",[t._v("  World Cup 2018")]),e("h2",[t._v("I created this page to learn more about Vue.js, CSS Grid and Rest APIs")]),e("h4",[t._v("Feel free to browse the code at my "),e("a",{attrs:{href:"https://github.com/bartlomein/World-Cup-2018"}},[t._v("Github")])]),e("h3",[t._v("Enjoy!")])])])])}],f={},C=f,p=(e("4pjt"),Object(r["a"])(C,d,v,!1,null,"a987917e",null)),b=p.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"knockout"},[e("h1"),e("div",{staticClass:"tournament"},[t._m(0),e("div",{staticClass:"tournament__grid"},[e("div",{staticClass:"tournament__round tournament__round--first-round"},[t._m(1),t.sixteen.matches[0]?e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[0]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[0].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[0].team2.name))])]):e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])]),e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[1]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[1].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[1].team2.name))])]),e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[2]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[2].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[2].team2.name))])]),e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[3]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[3].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[3].team2.name))])]),e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[4]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[4].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[4].team2.name))])]),e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[5]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[5].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[5].team2.name))])]),t.sixteen.matches[6]?e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[6]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[6].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[6].team2.name))])]):e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])]),t.sixteen.matches[7]?e("div",{staticClass:"tournament__match",on:{click:function(a){t.sendData(t.sixteen.matches[7]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[7].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.sixteen.matches[7].team2.name))])]):e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])]),e("div",{staticClass:"tournament__round tournament__round--first-round"},[t._m(2),t.eight.matches[0]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.eight.matches[0]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[0].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[0].team2.name))])]):e("div",{staticClass:"tournament__match tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])]),t.eight.matches[1]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.eight.matches[1]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[1].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[1].team2.name))])]):e("div",{staticClass:"tournament__match tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])]),t.eight.matches[2]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.eight.matches[2]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[2].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[2].team2.name))])]):e("div",{staticClass:"tournament__match tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])]),t.eight.matches[3]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.eight.matches[3]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[3].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[3].team2.name))])]):e("div",{staticClass:"tournament__match tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])]),e("div",{staticClass:"tournament__round"},[t._m(3),t.semi.matches[0]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.semi.matches[0]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[0].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[0].team2.name))])]):t._e(),t._m(4),t.eight.matches[1]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.semi.matches[1]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[1].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.eight.matches[1].team2.name))])]):t._e(),t._m(5)]),e("div",{staticClass:"tournament__round tournament__round--final"},[t._m(6),t.final.matches[0]?e("div",{staticClass:"tournament__match tournament__match",on:{click:function(a){t.sendData(t.final.matches[0]),t.show(),t.formatDate(t.match)}}},[e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.final.matches[0].team1.name))]),e("a",{staticClass:"tournament__match__team clickable"},[t._v(t._s(t.final.matches[0].team2.name))])]):t._e(),t._m(7)]),t.final.matches[0]?e("div",{staticClass:"tournament__round tournament__round--winner",on:{click:function(a){t.sendData(t.final.matches[0]),t.show(),t.formatDate(t.match)}}},[t._m(8),e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v(t._s(t.final.matches[0].team1.name))])]),t.final.matches[0].score1>t.final.matches[0].score2?e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v(t._s(t.final.matches[0].team1.name))])]):t.final.matches[0].score1<t.final.matches[0].score2?e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v(t._s(t.final.matches[0].team2.name))])]):t._e()]):e("div",{staticClass:"tournament__round tournament__round--winner"},[t._m(9),t._m(10)])])]),e("modal",{attrs:{name:"detailview",classes:"detail-modal",adaptive:!0,maxHeight:800}},[t.match?e("div",{staticClass:"modal-details"},[e("div",{staticClass:"detail-group"},[t._v(t._s(t.date))]),e("div",{staticClass:"modal-names-and-scores"},[e("div",{staticClass:"modal-team-one"},[e("div",{staticClass:"modal-team-name"},[t._v(t._s(t.match.team1.name)+" ")]),t._l(t.match.goals1,function(a){return e("div",{staticClass:"score-one-goals"},[e("div",{staticClass:"scorer-name"},[t._v(" "+t._s(a.name)+" "),e("span",{staticClass:"scorer-minute"},[t._v(t._s(a.minute)+"'")])])])})],2),e("div",{staticClass:"modal-score-one"},[t._v(" "+t._s(t.match.score1)+"\n        \n       ")]),e("div",{staticClass:"modal-score-two"},[t._v(t._s(t.match.score2)+" ")]),e("div",{staticClass:"modal-team-two"},[e("div",{staticClass:"modal-team-name"},[t._v(" "+t._s(t.match.team2.name)+" ")]),t._l(t.match.goals2,function(a){return e("div",{staticClass:"score-two-goals"},[t._v("\n          "+t._s(a.name)+" "+t._s(a.minute)+"'\n          ")])})],2)]),e("div",{staticClass:"modal-time"},[t._v("Time: "+t._s(t.match.time)+"  "+t._s(t.match.timezone)+"\n    "),e("div",{staticClass:"modal-city"},[t._v("City: "+t._s(t.match.city))])])]):t._e()])],1)},D=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tournament__logo-container tournament__logo-container--right"},[e("strong",{staticClass:"tournament__logo tournament__logo--gold"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Round of 16")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Quarterfinal")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Semifinal")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tournament__match tournament__match",attrs:{else:""}},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tournament__match tournament__match",attrs:{else:""}},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Final")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tournament__match tournament__match",attrs:{else:""}},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")]),e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Champion")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label"},[e("h2",[t._v("Champion")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tournament__match"},[e("a",{staticClass:"tournament__match__team"},[t._v("TBD")])])}],k=(e("pIFo"),{data:function(){return{sixteen:null,eight:null,semi:null,final:null,match:null,date:null}},created:function(){var t=this;_.a.get("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json").then(function(a){return t.sixteen=a.data.rounds[15],t.eight=a.data.rounds[16],t.semi=a.data.rounds[17],t.final=a.data.rounds[19],t.champ=a.data.rounds[20]})},methods:{show:function(){this.$modal.show("detailview")},hide:function(){this.$modal.hide("detailview")},sendData:function(t){this.match=t},formatDate:function(t){this.date=t.date.replace("2018-","").replace("-","/")}}}),w=k,x=(e("U9hN"),Object(r["a"])(w,g,D,!1,null,"d6048738",null)),y=x.exports;s["a"].use(n["a"]);a["a"]=new n["a"]({routes:[{path:"/",name:"Home",component:b},{path:"/group",name:"Days",component:h},{path:"/knockout",name:"Knockout",component:y}]})},U9hN:function(t,a,e){"use strict";var s=e("nw6D"),n=e.n(s);n.a},Vtdi:function(t,a,e){"use strict";e.r(a),function(t){e("VRzm");var a=e("Kw5r"),s=e("Pf3K"),n=e("GIGG"),c=e.n(n),m=e("QctN");a["a"].use(c.a),a["a"].config.productionTip=!1,t.vm=a["a"],new a["a"]({router:m["a"],render:function(t){return t(s["a"])}}).$mount("#app")}.call(this,e("yLpj"))},ZL7j:function(t,a,e){"use strict";var s=e("EDI0"),n=e.n(s);n.a},nw6D:function(t,a,e){}});
//# sourceMappingURL=app.790b8a0e.js.map