import Vue from 'vue'
import Vuex from 'vuex'
import staff from './modules/staff'
import set from './modules/set'
import auth from './modules/auth'
import social from './modules/social'
import rove from './modules/rove'
import check from './modules/check'
import salary from './modules/salary'
Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		staff,
		set,
		auth,
		social,
		rove,
		check,
		salary
	}
})