<template>
  <div class="container-fluid px-0">
    <div v-if="isPageLoading" class="loading-container">
      <img src="../assets/paw_logo_2.png">
      <h2 class="loading-header">LOADING THE GOODEST BOYS AND GIRLS...</h2>
    </div>
    <div v-else>
      <div class="hero-container">
        <h2 class="d-block pt-4 text-white">Some of Your Future Friends</h2>
        <AnimalDisplay v-bind:animalResults="animalResults"></AnimalDisplay>
      </div>
      <div class="search-zip-container container">
        <div class="row">
          <div class="col-md-6 pb-4">
            <h2 class="d-block">Looking to visit a shelter near you?</h2>
            <p>TheGoodest.com holds an enormous database of dogs, cats, and even some bunnies that need a home! Let us help you do a more detailed search so that we can help you find your new friend!</p>
            <router-link to="/search" tag="button" class="btn btn-primary">Start Now</router-link>
          </div>
          <div class="col-md-6">
            <img src="./../assets/cat-piano.gif" class="img-fluid">
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueSwing from 'vue-swing';
import { Client } from '@petfinder/petfinder-js';
import AnimalDisplay from './AnimalDisplay';

const client = new Client({apiKey: process.env.VUE_APP_API_KEY , secret: process.env.VUE_APP_SECRET});
Vue.component('vue-swing', VueSwing);

export default {
  name: 'Main',
  components: {
    AnimalDisplay,
    VueSwing
  },
  data() {
    return {
      animalResults: [],
      isPageLoading: false
    }
  },
  methods: {
    loadData() {
      this.isPageLoading = true;
      client.animal.search({
        limit: 44
      })
      .then(response => {
        const res = response.data.animals;
        return res;      
      })
      .then(data => {
        this.animalResults = data;
        this.isPageLoading = false;
      })
      .catch(error => {
        this.isPageLoading = false;
        console.log('error', error);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadData();
    })
  }
}
</script>

<style scoped>
  .hero-container {
    background-image: url('./../assets/bg-hero.jpeg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
    position: relative;
    z-index: 1;
  }
  .hero-container:before {
    background-color: #000;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    opacity: .15;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  .col-md-3 img {
    height: 300px;
    margin-bottom: 6px;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: 50% 0%;
    -webkit-animation: fadein 2s;
    animation: fadein 2s;
    width: 100%;
  }
  .loading-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    z-index: 10; 
  }
  .loading-container h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(170%);
    z-index: 15;
  }
  .loading-container img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin:-60px 0 0 -60px;
    z-index: 15;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
  }
  .search-zip-container {
    padding-bottom: 50px;
    padding-top: 50px;
  }
  .search-zip-container .col-md-6 {
    text-align: left;
  }
  .search-zip-container .btn {
    background-color: #FF2C37;
    border-color: #FF2C37;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

  @media only screen and (max-width: 768px) {
    .loading-container h2 {
      transform: translateX(-50%) translateY(100%);
    }
    .search-zip-container .col-md-6 {
      text-align: center;
    }
  }
</style>

