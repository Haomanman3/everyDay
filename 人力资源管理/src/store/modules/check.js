import {
	checkData,
	reportData
} from "@/views/api/check"

export default {
	namespaced: "true",
	state: {
		checkData:[],
		checkList:[]
	},
	mutations: {
		checkList(state,data){
			console.log(data);
			state.checkData=data.data.rows
			console.log(state.checkData);
		},
		checks(state,data){
				state.checkList=data
		}
	},
	actions: {
	checks(ctx,params){
		checkData(params).then(res=>{
			console.log(res);
			ctx.commit("checkList",res.data.data);
		})
	},
	reports(ctx){
		reportData().then(res=>{
			console.log(res);
			ctx.commit("checks",res.data.data)
		})
	}

	},
	getters: {}
}