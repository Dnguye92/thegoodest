<template>
    <div class="card mb-3" v-if="animal.photos.length">
      <router-link
        :to="{
          name: 'animal-detail',
          params: { animalId: animal.id, name: animal.name, description: animal.description, breeds: animal.breeds, img: animal.photos[0].medium, status: animal.status, gender: animal.gender, species: animal.species, age: animal.age, colors: animal.colors, contact: animal.contact }
        }"
      >
        <div class="single-animal-container">
          <img :src="animal.photos[0].medium" width="150">
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
  .card {
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    font-size: 18px;
    height: 350px;
    justify-content: center;
    left: calc(50% - 150px);
    position: absolute;
    top: calc(40% - 100px);
    width: 300px;
    z-index: 20;
  }
  .card img {
    border-radius: 10px;
    height: 200px;
    margin-bottom: 6px;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: 50% 20%;
    width: 200px;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
  }
  @media only screen and (max-width: 414px) {
    .card {
      left: calc(50% - 125px);
      width: 250px;
    }
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
</style>