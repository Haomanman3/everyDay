import {
	socialData,
	componData,
	cityData,
	topData,
	hisData,
	monData
} from "@/views/api/social"

export default {
	namespaced: "true",
	state: {
		soData: [],
		comData:[],
		citys:[],
		topList:[],
		HistoryList:[],
		monLists:[]
	},
	mutations: {
		socialList(state, data) {
			state.soData = data.rows
		},
		comLists(state,obj){
			state.comData=obj.depts
		},
		citys(state,city){
				state.citys=city
		},
		top(state,data){
			state.topList=data
		},
		history(state,data){
			state.HistoryList=data
		},
		month(state,data){
			state.monLists=data
		}
	},
	actions: {
		soList(ctx) {
			socialData().then(res => {
				// console.log(res);
				ctx.commit("socialList", res.data.data)
			})
		},
		comList(ctx) {
			componData().then(res => {
				// console.log(res);
				ctx.commit("comLists", res.data.data)
			})
		},
		cityList(ctx){
			cityData().then(res=>{
				// console.log(res);
				ctx.commit("citys",res.data.data)
			})
		},
		topList(ctx){
			topData().then(res=>{
				console.log(res);
				ctx.commit("top",res.data.data)
			})
		},
		hisList(ctx,params){
			hisData(params).then(res=>{
				console.log(res);
				ctx.commit("history",res.data.data)
			})
		},
		monList(ctx,params){
			monData(params).then(res=>{
				console.log(res);
				ctx.commit("month",res.data.data)
			})
		}

	},
	getters: {}
}