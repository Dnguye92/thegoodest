<template>
  <div class="container">
    <div class="row my-5">
        <div class="col-md-6 text-right">
          <img :src="$route.params.img">
        </div>
        <div class="col-md-6 text-left">
          <h1>{{$route.params.name}}</h1>
          <p class="font-weight-bold my-2">Gender: <span class="font-weight-light">{{$route.params.gender}}</span></p>
          <p class="font-weight-bold my-2">Status: <span class="font-weight-light">{{$route.params.status}}</span></p>
          <p class="font-weight-bold my-2">Age: <span class="font-weight-light">{{$route.params.age}}</span></p>

          <p class="font-weight-bold my-2" v-if="$route.params.breeds.primary == null"></p>
          <p class="font-weight-bold my-2" v-else>Primary Breed: <span class="font-weight-light">{{$route.params.breeds.primary}}</span></p>

          <p class="font-weight-bold my-2" v-if="$route.params.colors.primary == null"></p>
          <p class="font-weight-bold my-2" v-else>Primary Color: <span class="font-weight-light">{{$route.params.colors.primary}}</span></p>

          <!-- <p class="font-weight-bold my-2">Description: <span class="font-weight-light">{{$route.params.description}}</span></p> -->
          <p class="font-weight-bold my-2">Email to contact: <span class="font-weight-light">{{$route.params.contact.email}}</span></p>

          <p class="font-weight-bold my-2" v-if="$route.params.contact.number == null"></p>
          <p class="font-weight-bold my-2" v-else>Phone Number to contact: <span class="font-weight-light">{{$route.params.contact.number}}</span></p>

          <router-link to="/" class="d-block mt-1 back">Go back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalDetail'
}
</script>

<style scoped>
  .back {
    color: #FF2C37;
  }
</style>

