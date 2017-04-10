<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Headers
  }
}
</script>

<style>
body,html{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
