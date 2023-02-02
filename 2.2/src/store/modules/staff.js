import {
	staData
} from "@/views/api/staffs"

export default {
	namespaced: "true",
	state: {
			list:[],
			total:0
	},
	mutations: {
		updateStaff(state,obj){
			console.log(obj);

			state.list=obj.rows
			console.log(state.list,1);
			state.total=obj.total
		}
	},
	actions: {
		staList(ctx, obj) {
			console.log(obj);
			staData({
        page: obj,
        size: 5,
        total: 10
      }).then((res) => {
				console.log(res);
				ctx.commit("updateStaff",res.data.data);

			})
		}
	},
	getters: {}
}