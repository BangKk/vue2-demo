<template>
  <div class="view">
    <ItemList v-for="module in modules" :module='module'></ItemList>
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
export default {
  components: {
    ItemList
  },
  data () {
    return {
      modules: this.$store.getters.modules
    }
  }
}
</script>
<style lang="stylus">
.view
    max-width 800px
    margin 0 auto
    position relative
    padding-top 45px
</style>
