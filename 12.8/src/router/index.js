import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        component: () => import("../views/Wel.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("../views/Users.vue"),
        meta: ["首页", "用户管理", "用户列表"]
      },
      {
        path: "add",
        name: "add",
        component: () => import("../views/Add.vue")
      },
      {
        path: "roles",
        name: "roles",
        component: () => import("../views/Roles.vue"),
        meta: ["首页", "权限管理", "角色列表"]
      },
      {
        path: "rights",
        name: "rights",
        component: () => import("../views/Rights.vue"),
        meta: ["首页", "权限管理", "权限列表"]
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("../views/Goods.vue"),
        meta: ["首页", "商品管理", "商品列表"]
      },
      {
        path: "params",
        name: "params",
        component: () => import("../views/Params.vue"),
        meta: ["首页", "订单管理", "订单列表"]
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("../views/Categories.vue"),
        meta: ["首页", "商品管理", "参数列表"]
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/Orders.vue"),
        meta: ["首页", "用户管理", "用户列表"]
      },
      {
        path: "reports",
        name: "reports",
        component: () => import("../views/Reports.vue"),
        meta: ["首页", "数据统计", "数据报表"]
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
    component: () => import("../views/LoginView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
