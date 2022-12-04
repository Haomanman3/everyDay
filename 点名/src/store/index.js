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
    },
    update(state,obj){
        console.log(obj);
        state.list[obj.id].name=obj.name
        state.list[obj.id].resource=obj.resource
        state.list[obj.id].time=obj.time
    }
  },
  actions: {
  },
  modules: {
  }
})
