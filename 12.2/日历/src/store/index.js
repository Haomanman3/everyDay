import Vue from 'vue'
import Vuex from 'vuex'
import pers from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[pers()],
  state: {
    list:[],
    check:false
  },
  getters: {
  },
  mutations: {
    submitForm(state,obj) {
    state.list.push(obj)
    console.log(state.list);
    }
  },
  actions: {
  },
  modules: {
  }
})
