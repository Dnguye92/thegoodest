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
          <p class="font-weight-bold my-2" v-if="$route.params.colors.primary !== null">Primary Breed: <span class="font-weight-light">{{$route.params.breeds.primary}}</span></p>
          <p class="font-weight-bold my-2">Primary Color: <span class="font-weight-light">{{$route.params.colors.primary}}</span></p>
          <p class="font-weight-bold my-2">Description: <span class="font-weight-light">{{$route.params.description}}</span></p>
          <router-link to="/" class="d-block mt-1">Go back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalDetail'
}
</script>
