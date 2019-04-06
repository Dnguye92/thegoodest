<template>
  <div class="col-md-4 box" v-if="org.photos.length">
    <img :src="org.photos[0].small" >
    <p>{{org.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'SingleOrgDisplay',
  props: ['org']
}
</script>

<style scoped>
  .box img {
    border-radius: 10px;
    height: 130px;
    margin-bottom: 6px;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: 50% 20%;
    width: 130px;
  }
</style>

