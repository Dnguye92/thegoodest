<template>
  <div>
    <h1>Animal Vue</h1>
    <p>{{ $route.params.animalId }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Animal',
    watch: {
      '$route' (to, from) {
        // alert(to.params.animalId);
      }
    },
    created() {
      // alert(this.$route.params.animalId);
    }
  }
</script>
