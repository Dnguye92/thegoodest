import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Main from './components/Main.vue';
import AnimalDetail from './views/AnimalDetail.vue';
import Search from './views/Search.vue';
import 'jquery/dist/jquery.min';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './../../node_modules/vue-swipe/dist/vue-swipe.css';
import 'popper.js/dist/popper.min';
import './../../node_modules/hamburgers/dist/hamburgers.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaw)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
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
