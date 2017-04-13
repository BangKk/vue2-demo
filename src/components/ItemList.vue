<template>
  <div class="item-list">
   <div class="title">{{ module.title }}</div>
    <transition-group tag="ul" name="item">
     <item v-for="(item, index) in displayedItems" :key="item.album_id" :item="item" :index="index"></item>
    </transition-group>
  </div>
</template>
<script>
import Item from './Item.vue'
// import store from '../store/index'

export default {
  name: 'item-list',
  props: {
    module
  },
  components: {
    Item
  },
  beforeMount () {
    console.log('beforeMount')
    this.loadItems()
  },
  data () {
    return {
      displayedItems: []
    }
  },
  methods: {
    loadItems () {
      this.$store.dispatch('getMusicItem', this.module.type)
        .then((res) => {
          this.displayedItems = res
        })
    }
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  }
}
</script>
<style lang="stylus">
.item-list
  margin-bottom 30px
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)
  background-color #fff
  border-radius 2px

.item-list .title
  color #f60
  font-size 1.1em
  font-weight 700
  padding 15px 10px 0px 50px

.slide-left-enter, .slide-right-leave-active
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-active, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)
</style>
