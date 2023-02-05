import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: HomeView,
		redirect: "/login"
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
		children: [{
				path: 'index',
				name: 'index',
				component: () => import('../views/HomePage/Index.vue')
			},
			{
				path: 'chart',
				name: 'chart',
				component: () => import('../views/chart/Chart.vue')
			},
			{
				path: 'staff',
				name: 'staff',
				component: () => import('../views/staff/staff.vue')
			},
			{
				path: 'image',
				name: 'image',
				component: () => import('../views/staff/Images.vue')
			},
			{
				path: 'person',
				name: 'person',
				component: () => import('../views/staff/Person.vue')
			},
			{
				path: 'set',
				name: 'set',
				component: () => import('../views/set/set.vue')
			},
			{
				path: 'auth',
				name: 'auth',
				component: () => import('../views/auth/auth.vue')
			},
			{
				path: 'social',
				name: 'social',
				component: () => import('../views/social/social.vue')
			},
			{
				path: "detail",
				name: "detail",
				component: () => import("../views/social/detail.vue")
			},
			{
				path: "history",
				name: "history",
				component: () => import("../views/social/history.vue")
			},
			{
				path: "month",
				name: "month",
				component: () => import("../views/social/month.vue")
			},
			{
				path: "rove",
				name: "rove",
				component: () => import("../views/Approve/Approve.vue")
			},
			{
				path: "leave",
				name: "leave",
				component: () => import("../views/Approve/leave.vue")
			},
			{
				path: "appSet",
				name: "appSet",
				component: () => import("../views/Approve/appSet.vue")
			},
			{
        path: "check",
        name: "check",
        component: () => import("../views/Check/Check.vue")
      },
      {
        path: "salary",
        name: "salary",
        component: () => import("../views/Salary/Salary.vue")
      },
			{
        path: "checkHistory",
        name: "checkHistory",
        component: () => import("../views/Check/checkHistory.vue")
      },
      {
        path: "menstruation",
        name: "menstruation",
        component: () => import("../views/Check/menstruation.vue")
      },
      {
        path: "checkimg",
        name: "checkimg",
        component: () => import("../views/Check/CheckImage.vue")
      },
      {
        path: "priceset",
        name: "priceset",
        component: () => import("../views/Salary/salState.vue")
      },
      {
        path: "monthstate",
        name: "monthstate",
        component: () => import("../views/Salary/monthStatement.vue")
      },
      {
        path: "details",
        name: "details",
        component: () => import("../views/Salary/details.vue")
      }

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