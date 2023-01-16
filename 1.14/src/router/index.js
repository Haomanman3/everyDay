import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "index", //首页
        name: "index",
        component: () => import("../views/HomePage/Index.vue")
      },
      {
        path: "staff", //员工
        name: "staff",
        component: () => import("../views/Staff/Staff.vue")
      },
      {
        path: "set", //设置
        name: "set",
        component: () => import("../views/Set/Set.vue")
      },
      {
        path: "auth", //权限管理
        name: "auth",
        component: () => import("../views/Authority/Authority.vue")
      },
      {
        path: "social", //社保
        name: "social",
        component: () => import("../views/Social/Social.vue")
      },
      {
        path: "rove", //审批
        name: "rove",
        component: () => import("../views/Approve/Approve.vue")
      },
      {
        path: "check", //考勤
        name: "check",
        component: () => import("../views/Check/Check.vue")
      },
      {
        path: "salary", //工资
        name: "salary",
        component: () => import("../views/Salary/Salary.vue")
      },
      {
        path: "chart", //组织架构
        name: "chart",
        component: () => import("../views/Chart/Chart.vue")
      },
      {
        path: "images",
        name: "images",
        component: () => import("../views/Staff/Images.vue")
      },
      {
        path: "person",
        name: "person",
        component: () => import("../views/Staff/children/Person.vue")
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
        path: "detail",
        name: "detail",
        component: () => import("../views/Social/detail.vue")
      },
      {
        path: "history",
        name: "history",
        component: () => import("../views/Social/history.vue")
      },
      {
        path: "month",
        name: "month",
        component: () => import("../views/Social/month.vue")
      },
      {
        path: "checkHistory", //考勤历史记录
        name: "checkHistory",
        component: () => import("../views/Check/checkHistory.vue")
      },
      {
        path: "menstruation", //考勤月份
        name: "menstruation",
        component: () => import("../views/Check/menstruation.vue")
      },
      {
        path: "checkimg", //考勤月份
        name: "checkimg",
        component: () => import("../views/Check/CheckImage.vue")
      },
      {
        path: "priceset", //考勤月份
        name: "priceset",
        component: () => import("../views/Salary/salState.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Logins/Login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
