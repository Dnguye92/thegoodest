<template>
  <div class="row">
    <SingleAnimal
      v-for="(animal, index) in animalResults"
      v-bind:key="index"
      v-bind:animal="animal"
    ></SingleAnimal>
    </div>
</template>

<script>
import SingleAnimal from './SingleAnimal';

export default {
  name: 'AnimalDisplay',
  props: ['animalResults'],
  components: {
    SingleAnimal
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.animalResults);
    })
  }
}
</script>
