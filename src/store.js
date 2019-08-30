import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, removeToken, getToken } from 'common/js/cache'

Vue.use(Vuex)

const mutations_types = {
  SET_TOKEN: 'SET_TOKEN',
  REMOVE_TOKEN: 'REMOVE_TOKEN'
}
export default new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    [mutations_types.SET_TOKEN](state, token) {
      state.token = token
      setToken(token)
    },
    [mutations_types.REMOVE_TOKEN](state, token) {
      state.token = null
      removeToken()
    }
  },
  actions: {

  }
})
