import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/common/HomeView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Wel.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("../views/users/Users.vue"),
        meta: ["首页", "用户管理", "用户列表"]
      },
      {
        path: "add",
        name: "add",
        component: () => import("../views/shop/Add.vue")
      },
      {
        path: "roles",
        name: "roles",
        component: () => import("../views/role/Roles.vue"),
        meta: ["首页", "权限管理", "角色列表"]
      },
      {
        path: "rights",
        name: "rights",
        component: () => import("../views/rights/Rights.vue"),
        meta: ["首页", "权限管理", "权限列表"]
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("../views/shop/Goods.vue"),
        meta: ["首页", "商品管理", "商品列表"]
      },
      {
        path: "params",
        name: "params",
        component: () => import("../views/shop/Params.vue"),
        meta: ["首页", "商品管理", "参数列表"]
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("../views/shop/Categories.vue"),
        meta: ["首页", "用户管理", "用户列表"]
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/orders/Orders.vue"),
        meta: ["首页", "订单管理", "订单列表"]
      },
      {
        path: "reports",
        name: "reports",
        component: () => import("../views/reports/Reports.vue"),
        meta: ["首页", "数据统计", "数据报表"]
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/common/LoginView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
