import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Animal from './components/Animal.vue';
import Main from './components/Main.vue';
import AnimalDetail from './views/AnimalDetail.vue';

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// require('expose-loader?$!expose-loader?jQuery!jquery')
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './../node_modules/popper.js/dist/popper.min.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    
  },
  {
    path: '/animal/:animalId',
    component: AnimalDetail,
    name: 'animal-detail'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
