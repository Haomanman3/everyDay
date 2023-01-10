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
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
