<template>
  <div class="row">
    <SingleAnimalDisplay
      v-for="(animal, index) in animalResults"
      v-bind:key="index"
      v-bind:animal="animal"
    ></SingleAnimalDisplay>
    </div>
</template>

<script>
import SingleAnimalDisplay from './SingleAnimalDisplay';

export default {
  name: 'AnimalDisplay',
  props: ['animalResults'],
  components: {
    SingleAnimalDisplay
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
