import {
	roveData
} from "@/views/api/rove"

export default {
	namespaced: "true",
	state: {
		roveList: [],
		roveTotal: 0
	},
	mutations: {
		getRove(state, data) {
			state.roveList = data.rows
		}
	},
	actions: {
		roves(ctx) {
			roveData().then(res => {
				// console.log(res);
				ctx.commit("getRove", res.data.data);
			})
		}
	},
	getters: {}
}