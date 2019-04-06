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
      leftSwipedAnimals: []
    }
  },
  components: {
    SingleAnimalDisplay,
    VueSwing
  },
  methods: {
    onThrowout ({ target, throwDirection }) {
      if (throwDirection.toString() == 'Symbol(RIGHT)') {
        this.rightSwipes++;
        this.rightSwipedAnimals.push(this.animalResults.pop());
        console.log(`Right Swipes: ${this.rightSwipes}`);
        console.log(this.rightSwipedAnimals);
      } else {
        this.leftSwipes++;
        this.leftSwipedAnimals.push(this.animalResults.pop());
        console.log(`Left Swipes: ${this.leftSwipes}`);
        console.log(this.leftSwipedAnimals);
      }
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
