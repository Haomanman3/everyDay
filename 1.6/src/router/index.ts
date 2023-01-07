import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
		children: [
			{
				path: 'good',
				name: 'good',
				component: () => import( '../views/GoodMorning.vue')
			},
			{
				path: 'organ',
				name: 'organ',
				component: () => import( '../views/Organ.vue')
			},
			{
				path: 'staff',
				name: 'staff',
				component: () => import( '../views/Staff.vue')
			},
			{
				path: 'company',
				name: 'company',
				component: () => import( '../views/Company.vue')
			},
			{
				path: 'type',
				name: 'type',
				component: () => import( '../views/Type.vue')
			},
			{
				path: 'social',
				name: 'social',
				component: () => import( '../views/Social.vue')
			},
			{
				path: 'work',
				name: 'work',
				component: () => import( '../views/Work.vue')
			},
			{
				path: 'price',
				name: 'price',
				component: () => import( '../views/Price.vue')
			},
			{
				path: 'approve',
				name: 'approve',
				component: () => import( '../views/Approve.vue')
			},
			{
				path: 'icon',
				name: 'icon',
				component: () => import( '../views/Icon.vue')
			},
			{
				path: 'history',
				name: 'history',
				component: () => import( '../views/History.vue')
			},
			{
				path: 'state',
				name: 'state',
				component: () => import( '../views/State.vue')
			},
		]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
