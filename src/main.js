import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Main from './components/Main.vue';
import AnimalDetail from './views/AnimalDetail.vue';
import Search from './views/Search.vue';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './../node_modules/vue-swipe/dist/vue-swipe.css';
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
  },
  {
    path: '/search',
    component: Search,
    name: 'search'
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
