<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    Nav,
    Footer
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a, a:hover {
  color: #000000;
}
</style>
