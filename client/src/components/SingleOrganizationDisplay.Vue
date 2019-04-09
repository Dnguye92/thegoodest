<template>
  <div class="col-md-4 box" v-if="org.photos.length">
    <img
      :src="org.photos[0].small"
    >
    <p class="mb-0 font-weight-bold">{{org.name}}</p>
    <p>{{org.address.address1}} {{org.address.city}}, {{org.address.state}} {{org.address.postcode}}</p>
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
    border: 2px solid #2c3e50;
    border-radius: 10px;
    height: 100px;
    margin-bottom: 6px;
    -o-object-fit: contain;
    object-fit: contain;
    object-position: 50% 20%;
    width: 130px;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
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

