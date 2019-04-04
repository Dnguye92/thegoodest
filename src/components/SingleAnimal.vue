<template>
    <div class="col-md-3 mb-3">
      <div class="single-animal-container" v-if="animal.photos.length">
        <img :src="animal.photos[0].medium">
        <p class="mb-0">{{animal.name}}</p>
        <span class="font-weight-bold text-capitalize d-block">{{animal.status}}</span>
        <span class="font-weight-bold d-block">{{animal.contact.address.city}}, {{animal.contact.address.state}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SingleAnimal',
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