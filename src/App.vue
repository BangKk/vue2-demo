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
body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 15px;
    background-color: #f2f3f5;
    margin: 0;
    padding-top: 55px;
    overflow-y: scroll;
}
body,html{
  margin: 0;
}
body a {
  color: #34495e;
}
body a:hover {
  cursor: pointer
}
ul{
  padding: 0;
  margin: 0;
}
</style>
