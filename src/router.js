import Vue from 'vue'
import Router from 'vue-router'
import Days from './components/Days.vue'
import Home from './components/Home.vue'
import Knockout from "./components/Knockout.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/group',
            name: 'Days',
            component: Days
        },
        {
            path: '/knockout',
            name: 'Knockout',
            component: Knockout
        }
    ]
})