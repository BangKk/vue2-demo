<template>
  <div class="form-c">
    <form>
      <h2>注册</h2>
      <div class="group">
        <label for="username">用户名：</label>
        <input id="username" type="text" name="" v-model:trim="user.username" placeholder="请输入用户名">
      </div>
      <div class="group">
        <label for="password">密码：</label>
        <input id="password" type="password" v-model:trim="user.password" placeholder="请输入密码">
      </div>
      <button type="button" @click="register()">注册</button>
    </form>
  </div>
</template>
<script>
import store from '../store/index'

export default{
  name: 'register',
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
    register: function () {
      var user = this.user
      if (user.username && user.password) {
        store.dispatch('register', user)
          .then(res => {
            alert(res.msg)
            this.$router.push({name: 'login'})
          }, res => {
            alert(res.msg)
          })
      }
    }
  }

}
</script>
<style lang="stylus">
.form-c
  text-align center
  form
    margin 20px auto
    background-color #fff
    display inline-block
    padding 20px 50px 50px 50px
    .group
      margin-bottom 10px
      input
        padding 5px 10px
        outline none
</style>
