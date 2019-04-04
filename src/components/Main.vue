<template>
  <div class="container-fluid">
    <AnimalDisplay v-bind:animalResults="animalResults"></AnimalDisplay>
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
      animalResults: []
    }
  },
  methods: {
    loadData() {
      const url = process.env.VUE_APP_URL;
      const token = process.env.VUE_APP_TOKEN;

      fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(response => {
        return response.json()
      }).then(data => {
        this.animalResults = data.animals;
        console.log(this.animalResults);
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
</style>

