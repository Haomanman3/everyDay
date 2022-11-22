import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
     
      {
        path: 'userList',
        name: 'userList',
        component: () => import(/* webpackChunkName: "about" */ '../views/userList.vue'),
        meta:['数据管理','用户列表']
      },
      {
        path: 'shopList',
        name: 'shopList',
        component: () => import(/* webpackChunkName: "about" */ '../views/shopList.vue'),
        meta:['数据管理','商家列表']
      },
      {
        path: 'foodList',
        name: 'foodList',
        component: () => import(/* webpackChunkName: "about" */ '../views/foodList.vue'),
        meta:['数据管理','食品列表']
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import(/* webpackChunkName: "about" */ '../views/orderList.vue'),
        meta:['数据管理','订单列表']
      },
      {
        path: 'adminList',
        name: 'adminList',
        component: () => import(/* webpackChunkName: "about" */ '../views/adminList.vue'),
        meta:['数据管理','管理员列表']
      },
      {
        path: 'addShop',
        name: 'addShop',
        component: () => import(/* webpackChunkName: "about" */ '../views/addShop.vue'),
        meta:['添加数据','添加商铺']
      },
      {
        path: 'addGoods',
        name: 'addGoods',
        component: () => import(/* webpackChunkName: "about" */ '../views/addGoods.vue'),
        meta:['添加数据','添加商品']
      },
      {
        path: 'visitor',
        name: 'visitor',
        component: () => import(/* webpackChunkName: "about" */ '../views/visitor.vue'),
        meta:['图表','用户分布']
      },
      {
        path: 'vueEdit',
        name: 'vueEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/vueEdit.vue'),
        meta:['编辑','文本编辑']
      },
      {
        path: 'adminSet',
        name: 'adminSet',
        component: () => import(/* webpackChunkName: "about" */ '../views/adminSet.vue'),
        meta:['设置','管理员设置']
      },
      {
        path: 'explain',
        name: 'explain',
        component: () => import(/* webpackChunkName: "about" */ '../views/explain.vue'),
        meta:['说明','说明']
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import(/* webpackChunkName: "about" */ '../views/manage.vue'),
        
      },
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
