import {
	SetData,
	addData,
	treeData,
	delData
} from "@/views/api/set"

export default {
	namespaced: "true",
	state: {
		setsList:[],
		setTotal:0
	},
	mutations: {
		updateSet(state,data){
			state.setsList=data.rows
			state.setTotal=data.total
		}
	},
	actions: {
		sets(ctx,data){
			console.log(data);
			SetData(data).then(res=>{
				console.log(res);
				ctx.commit("updateSet",res.data.data);
			})
		},
		pushAdd(ctx,data){
			console.log(data);
			addData(data).then(res=>{
				console.log(res);
				SetData(data).then(res=>{
					console.log(res);
					ctx.commit("updateSet",res.data.data);
				})
			})
		},
		dels(ctx,id){
			delData(id).then(res=>{
				console.log(res);
			})
		},
		tree(ctx,id){
			treeData().then(res=>{
				console.log(res);
			})
		}
	},
	getters: {}
}