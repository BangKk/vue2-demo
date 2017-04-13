import Vue from 'vue'
import Vuex from 'vuex'
import API from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [
      {username: 'admin', password: '123456'}
    ],
    curU: null,
    music: {
      newS: [],
      hotS: [],
      activeS: []
    },
    modules: [{
      type: 'newS',
      title: '新歌榜'
    }, {
      type: 'hotS',
      title: '热歌榜'
    }]
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
    },
    getMusicItem ({commit, state}, type) {
      console.log(0)
      return new Promise((resolve, reject) => {
        API.getMusicItems(type)
        .then(res => {
          commit('setMusic', {
            type,
            data: res.song_list
          })
          console.log(1)
          resolve(res.song_list)
        }, res => {
          console.log(2)
          reject()
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
    },
    setMusic (state, data) {
      if (data.type === 'newS') {
        state.music.newS = data.data
      } else if (data.type === 'hotS') {
        state.music.hotS = data.data
      }
    }
  },

  getters: {
    curU (state) {
      return state.curU
    },
    getNewS (state) {
      return state.music.newS
    },
    getHotS (state) {
      return state.music.hotS
    },
    modules (state) {
      return state.modules
    }
  }
})

export default store
