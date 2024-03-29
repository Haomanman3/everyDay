import Vue from 'vue'
import Vuex from 'vuex'
import staff from './modules/staff'
import set from './modules/set'
Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		staff,
		set
	}
})