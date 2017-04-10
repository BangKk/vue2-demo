<template>
  <nav class="nav">
    <li><router-link to="/home">首页</router-link></li>
    <li><router-link to="/zhuanlan">专栏</router-link></li>
    <li><router-link to="/colletion">收藏集</router-link></li>
    <ul class="nav-right">
      <div v-if="!curU">
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
      </div>
      <div v-else>
        <li><router-link to="/person">{{curU.username}}</router-link></li>
      </div>

    </ul>
  </nav>
</template>
<script>
import { mapState } from 'vuex'

export default{
  name: 'headers',
  data () {
    return {

    }
  },
  methods: {

  },
  computed: mapState({ curU: state => state.curU })

}
</script>
<style lang="stylus">
.nav
  background-color #eee
  margin 0 auto
  li
    display inline-block
    margin 0 20px
    height 50px
    line-height 50px
    a
      color #71777c;
      text-decoration none
  .nav-right
    float right
    margin 0 20px 0 0
    li
      margin 0 5px
</style>
