import Vue from 'vue'
import App from './App.vue'
import VModal from "vue-js-modal";
import router from "./router";

Vue.use(VModal);


Vue.config.productionTip = false
global.vm = Vue; 
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

