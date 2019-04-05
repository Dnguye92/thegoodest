<template>
    <div class="col-md-3 mb-3" v-if="animal.photos.length">
      <router-link
        :to="{
          name: 'animal-detail',
          params: { animalId: animal.id, name: animal.name, img: animal.photos[0].medium, description: animal.description, breeds: animal.breeds, status: animal.status, gender: animal.gender, species: animal.species, age: animal.age, colors: animal.colors }
        }"
      >
        <div class="single-animal-container">
          <img :src="animal.photos[0].medium">
          <p class="mb-0">{{animal.name}}</p>
          <span class="font-weight-bold text-capitalize d-block">{{animal.status}}</span>
          <span class="font-weight-bold d-block">{{animal.contact.address.city}}, {{animal.contact.address.state}}</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import Vue from 'vue';
// import VueSwing from 'vue-swing';
// Vue.component('vue-swing', VueSwing);

export default {
  name: 'SingleAnimalDisplay',
  props: ['animal']
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