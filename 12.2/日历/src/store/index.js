import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    check:false
  },
  getters: {
  },
  mutations: {
    add(state,obj) {
    // if(state.data==obj.time){
      state.list.push(obj)
    // }
    }
  },
  actions: {
  },
  modules: {
  }
})
