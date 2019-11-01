import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/index',
    name: 'index',
    component: function () {
      return import(/* webpackChunkName: "index" */ '../views/home/index.vue')
    },
    children:[
      {
        path: '/index/home',
        name: 'home',
        component: function () {
          return import(/* webpackChunkName: "home" */ '../views/home/home.vue')
        }
      },{
        path: '/index/fenlei',
        name: 'fenlei',
        component: function () {
          return import(/* webpackChunkName: "fenlei" */ '../views/home/fenlei.vue')
        }
      },{
        path: '/index/my',
        name: 'my',
        
        component: function () {
          return import(/* webpackChunkName: "my" */ '../views/home/my.vue')
        },
        beforeEnter(from,to,next){
          if(localStorage.user){
            console.log("kxd0-------");
            
            next()
          }else{
            console.log("meiyoy ------9");
            
            next({
              path:"/login"
            })
          }
        },
        
        
      },{
        path: '/index/shop',
        name: 'shop',
        component: function () {
          return import(/* webpackChunkName: "my" */ '../views/home/shop.vue')
        }
      }
    ]
    
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/user/login.vue')
    }
  },{
    path: '/registry',
    name: 'registry',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/user/registry.vue')
    }
  },
  {
    path: "/",
    redirect: "/index/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
