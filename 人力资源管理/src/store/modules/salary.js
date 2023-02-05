import {
	salData,
	componData
} from "@/views/api/salary"

export default {
	namespaced: "true",
	state: {
		salsList:[],
		salTotal:0
	},
	mutations: {
		salary(state,data){
			state.salsList=data.rows
		},
		comLists(state,obj){
			state.comData=obj.depts
		}
	},
	actions: {
		salarys(ctx,params){
			console.log(params);
			salData(params).then(res=>{
				console.log(res);
				ctx.commit("salary",res.data.data);
			})
		},
		comList(ctx) {
			componData().then(res => {
				console.log(res);
				ctx.commit("comLists", res.data.data)
			})
		},
	},
	getters: {}
}