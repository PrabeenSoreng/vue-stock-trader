import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/*webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/header",
    name: "header",
    component: () =>
      import(/*webpackChunkName: "header" */ "../components/Header.vue")
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import(
        /*webpackChunkName: "portfolio" */ "../components/portfolio/Portfolio.vue"
      )
  },
  {
    path: "/stocks",
    name: "stocks",
    component: () =>
      import(/*webpackChunkName: "stocks" */ "../components/stocks/Stocks.vue")
  }
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
