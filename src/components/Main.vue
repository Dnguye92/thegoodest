<template>
  <div class="container-fluid">
    <div v-if="isPageLoading" class="loading-container">
      <img src="../assets/paw_logo_2.png">
      <h2 class="loading-header">LOADING FURRY FRIENDS...</h2>
    </div>
    <div v-else>
      <AnimalDisplay v-bind:animalResults="animalResults"></AnimalDisplay>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AnimalDisplay from './AnimalDisplay';

export default {
  name: 'Main',
  components: {
    AnimalDisplay
  },
  data() {
    return {
      animalResults: [],
      isPageLoading: false
    }
  },
  methods: {
    loadData() {
      const url = process.env.VUE_APP_URL;
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5YWRlODI0YmMwMjI3MzRiMmUzNjUzYmIxMDU3ODI5YWMwYTI4NjcxZWY2NjIyM2RhMTZmZjU4ZWY2MjE4MWNlYTM2NzExMjIyYmFiNzNkIn0.eyJhdWQiOiJMWFZ2MEp5Sm4ybHhtbEJ2dUF5eTg5RlZiQUt4MklJSzROUEc2TlpsUVE5N1pGQVk4UiIsImp0aSI6IjI5YWRlODI0YmMwMjI3MzRiMmUzNjUzYmIxMDU3ODI5YWMwYTI4NjcxZWY2NjIyM2RhMTZmZjU4ZWY2MjE4MWNlYTM2NzExMjIyYmFiNzNkIiwiaWF0IjoxNTU0NDE5NDc1LCJuYmYiOjE1NTQ0MTk0NzUsImV4cCI6MTU1NDQyMzA3NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.fNZAdrHE1RU87Qe3i6ZUFDoVpKbgWgowdppdqoqEaQb96luwDD1R6GAxs4zeh2mN4n5J4hTIwNBXPMlWGNkTCtl13J5mGNQOvutWaH9S2r3WRY-3LtMeFDVkce6OvJxLodNNzmc2sL7SODfjCZGQ8Rh-2HhT18_ENsJjBgq4ReXWZqBnoppiaWsnXDy842_dIRWEEZu-TP57SG6b0ibb07CW6FiRKsRosyOX3QZLmSjwJW_mRqTPHjDySzKhdL_IQfT0eeO5DOrNmGtGMxwe8VSDEExrDaZLaTNKlfT4uegUqQ5bYzHMN8oY5spdUMLuHm8oL8OiGptIkAZ1Z2dp3w";
      this.isPageLoading = true;

      fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(response => {
        return response.json()
      }).then(data => {
        this.animalResults = data.animals;
        this.isPageLoading = false;
        console.log(this.animalResults);
      }).catch(err => {
        this.isPageLoading = false;
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadData();
      console.log(process.env.VUE_APP_URL);
    })
  }
}
</script>

<style scoped>
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
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

  @media only screen and (max-width: 768px) {
    .loading-container h2 {
      transform: translateX(-50%) translateY(100%);
    }
  }
</style>

