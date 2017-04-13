<template>
  <header class="header">
    <nav class="inner">
      <div class="inner-left">
        <router-link to="/home">首页</router-link>
        <router-link to="/movie">电影</router-link>
        <router-link to="/music">音乐</router-link>
      </div>
      <div class="inner-right">
        <template v-if="!curU">
          <router-link to="/login" class="inner-right">登录</router-link>
          <router-link to="/register" class="inner-right">注册</router-link>
        </template>
        <template v-else>
          <router-link to="/person" class="inner-right">{{curU.username}}</router-link>
        </template>
      </div>
    </nav>
  </header>
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
<style>
a {
    text-decoration: none;
}
.header {
    background-color: #f60;
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
}
.header a.router-link-active {
    color: #fff;
    font-weight: 400;
}
@media(max-width: 860px){
  .header .inner {
      padding: 15px 30px;
  }
}
.header .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 15px 5px;
}
.header .inner .inner-left{
    float: left;
}
.header .inner .inner-right{
    float: right;
}
.header .inner .inner-right a{
    color: #fff;
    font-size: .9em;
    margin: 0;
    margin-right: 10px;
}
.header a {
    color: hsla(0,0%,100%,.8);
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 600;
    letter-spacing: .075em;
    margin-right: 1.8em;
}
</style>
