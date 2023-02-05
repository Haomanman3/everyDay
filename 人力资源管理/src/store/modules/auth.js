import {
	authData,
	addData,
	upData,
	delData
} from "@/views/api/auth"
import {
	Message
} from 'element-ui';
export default {
	namespaced: "true",
	state: {
		auData: []
	},
	mutations: {
		updateAuth(state, data) {
			state.auData = data
		},

	},
	actions: {
		authList(ctx) {
			authData().then(res => {
				// console.log(res);
				ctx.commit("updateAuth", res.data.data);
			})
		},
		pushData(ctx, data) {
			addData(data).then(res => {
				// console.log(res);
				authData().then(res => {
					// console.log(res);
					ctx.commit("updateAuth", res.data.data);
				})
			})
		},
		updateData(ctx, data) {
			upData(data).then(res => {
				console.log(res);
				// ctx.commit("update")
				authData().then(res => {
					// console.log(res);
					ctx.commit("updateAuth", res.data.data);
				})

			})
		},
		dels(ctx, id) {
			console.log(id);
			delData(id).then(res => {
				console.log(res);
				Message(res.data.message)

			})
		}
	},
	getters: {}
}