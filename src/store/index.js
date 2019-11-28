import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spinCounter: 0
  },
  mutations: {
    increaseSpinCounter (state) {
      this.state.spinCounter++
    }
  },
  actions: {
    increaseSpinCounter ({ commit }) {
      commit('increaseSpinCounter')
    }
  },
  modules: {
  }
})
