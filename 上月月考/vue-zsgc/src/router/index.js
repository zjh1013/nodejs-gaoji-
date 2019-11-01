import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "index",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/home/index.vue");
    },
    children: [
      {
        path: "/index/xs",
        name: "xs",
        component: function() {
          return import(
            /* webpackChunkName: "about" */ "../views/home/school/xs.vue"
          );
        }
        // beforeEnter: (to, from, next) => {
        //   if (window.sessionStorage.token) {
        //     next({
        //       path: "/login"
        //     });
        //   } else {
        //     next();
        //   }
        // }
      },
      {
        path: "/index/js",
        name: "js",
        component: function() {
          return import(
            /* webpackChunkName: "about" */ "../views/home/school/js.vue"
          );
        }
      },
      {
        path: "/index/bj",
        name: "bj",
        component: function() {
          return import(
            /* webpackChunkName: "about" */ "../views/home/school/bj.vue"
          );
        }
      }
    ]
  },
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/login",
    name: "login",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/user/login.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
