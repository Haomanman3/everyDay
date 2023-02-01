import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: HomeView,
		redirect:"/login"
	},
	{
		path: '/about',
		name: 'about',
		component: () =>	import( '../views/AboutView.vue'),
		children: [
			{
				path: 'index',
				name: 'index',
				component:() => import('../views/HomePage/Index.vue')
			},
			{
				path: 'chart',
				name: 'chart',
				component:() => import('../views/chart/Chart.vue')
			},


		]
	},
	{
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
	routes
})

export default router