<template>
  <div class="row">
    <vue-swing
      :config="config"
      @throwout="onThrowout"
    >
      <SingleAnimalDisplay
        v-for="(animal, index) in animalResults"
        v-bind:key="index"
        v-bind:animal="animal"
      ></SingleAnimalDisplay>
    </vue-swing>
    </div>
</template>

<script>
import Vue from 'vue';
import VueSwing from 'vue-swing';
import SingleAnimalDisplay from './SingleAnimalDisplay';
import Service from './../services/Service';

export default {
  name: 'AnimalDisplay',
  props: ['animalResults'],
  data() {
    return {
      config: {
        allowedDirections: [
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        minThrowOutDistance: 50,
        maxThrowOutDistance: 50
      },
      rightSwipes: 0,
      rightSwipedAnimals: [],
      leftSwipes: 0,
      leftSwipedAnimals: [],
      currentAnimal: null,
      keepers: []
    }
  },
  components: {
    SingleAnimalDisplay,
    VueSwing
  },
  methods: {
    onThrowout({ target, throwDirection }) {
      if (throwDirection.toString() == 'Symbol(RIGHT)') {
        this.rightSwipes++;
        this.currentAnimal = this.animalResults.pop();
        // Service.addAnimal(this.currentAnimal);
        this.rightSwipedAnimals.push(this.currentAnimal);
      } else {
        this.leftSwipes++;
        this.currentAnimal = this.animalResults.pop();
        // Service.addAnimal(this.currentAnimal);
        this.leftSwipedAnimals.push(this.currentAnimal);
      }
    }
  },
  async created() {
    try {
      // this.keepers = await Service.getAnimal();
      // console.log(this.keepers);
    } catch(err) {
      console.log(err);
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.animalResults);
    })
  }
}
</script>

<style scoped>
  .fadeOut {
    animation: fadeout 2s ease-in-out;
    -webkit-animation: fadeout 2s ease-in-out;
  }
</style>
