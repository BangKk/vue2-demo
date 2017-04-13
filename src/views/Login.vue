<template>
  <div class="form-c">
    <form>
      <h2>登录</h2>
      <div class="group">
        <label for="username">用户名：</label>
        <input id="username" type="text" name="" v-model:trim="user.username" placeholder="请输入用户名">
      </div>
      <div class="group">
        <label for="password">密码：</label>
        <input id="password" type="password" v-model:trim="user.password" placeholder="请输入密码">
      </div>
      <button type="button" @click="login()">登录</button>
    </form>
  </div>
</template>
<script>
import store from '../store/index'

export default{
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // login: () => {
    //   console.log(this)
    // }
    login: function () {
      var user = this.user
      if (user.username && user.password) {
        store.dispatch('login', user)
          .then(res => {
            alert(res.msg)
            this.$router.push({name: 'home'})
          }, res => {
            alert(res.msg)
          })
      }
    }
  }

}
</script>
<style lang="stylus">
  form
    margin 20px auto
    .group
      margin-bottom 10px
</style>
