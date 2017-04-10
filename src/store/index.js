import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [
      {username: 'admin', password: '123456'}
    ],
    curU: null
  },

  actions: {
    register ({commit, state}, user) {
      return new Promise(function (resolve, reject) {
        for (var i = 0; i < state.users.length; i++) {
          if (state.users[i].username === user.username) {
            reject({
              msg: '当前用户名已存在'
            })
          }
        }
        commit('add', user)
        resolve({
          msg: '注册成功'
        })
      })
    },
    login ({commit, state}, user) {
      console.log(user)
      return new Promise(function (resolve, reject) {
        for (var i = 0; i < state.users.length; i++) {
          if (state.users[i].username === user.username && state.users[i].password === user.password) {
            commit('setCurU', user)
            resolve({
              msg: '登录成功'
            })
          }
        }
        resolve({
          msg: '登录失败'
        })
      })
    }
  },

  mutations: {
    add (state, user) {
      state.users.push(user)
    },
    setCurU (state, user) {
      state.curU = user
    }
  },

  getters: {
    curU (state) {
      return state.curU
    }
  }
})

export default store
