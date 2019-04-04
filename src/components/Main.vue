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
      const url = "https://api.petfinder.com/v2/animals";
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhhZmU1MjQzYWI4M2I4NmE0M2Q2YmZmOTYwZTBmNDMzMzJiNjg1ZDZlNGY5YTYyYzVmZmYyMjBkYjJiMGJlMDdjYmQ5MDc4YzdkNTI4MTA2In0.eyJhdWQiOiJMWFZ2MEp5Sm4ybHhtbEJ2dUF5eTg5RlZiQUt4MklJSzROUEc2TlpsUVE5N1pGQVk4UiIsImp0aSI6IjhhZmU1MjQzYWI4M2I4NmE0M2Q2YmZmOTYwZTBmNDMzMzJiNjg1ZDZlNGY5YTYyYzVmZmYyMjBkYjJiMGJlMDdjYmQ5MDc4YzdkNTI4MTA2IiwiaWF0IjoxNTU0MzU4MTEyLCJuYmYiOjE1NTQzNTgxMTIsImV4cCI6MTU1NDM2MTcxMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.nu2lpXhnSL0WNWjR1VIX-FcjwQFoQyVkYoKXLJV0u1tWdPxGGClkK6iFyBRe1g1i3pA8yAbfwnfTPmiJdLCZdpB1bKAuJCUYangOtl6CwuPSKj-oT5fH_FG9i25LEq99hgZqqwkey_ArpCrX4jrYbIe5quBB8FTeIGN7ytyZkAWHXcZ6FqvF1fNoQQWhBwDUQoNo1Ylv0Z4O2adqoHFNy2-tvZgeZA8eqN4QJ11kjXKOxCKgrpNTvAxwW1uriN-luUgRvddI5LX_gVz-DSZyherUQ-IYZD-ZvjOBlTcZlYsjw8LxT1eBoCVU_2kXTFuTRrTJdaaDXTM_ZAOxAUMj1g"

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

