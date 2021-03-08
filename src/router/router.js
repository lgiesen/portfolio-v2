import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue")
  },
  {
    path: "/playground",
    name: "Playground",
    component: () =>
      import(
        /* webpackChunkName: "playground" */ "../views/playground/Playground.vue"
      )
    // children: [
    //   {
    //     path: "user-dashboard",
    //     name: "UserDashboard",
    //     component: () =>
    //     import("@/views/user/Dashboard.vue"),
    //   },
    // ]
  },
  // 404-page needs to be at the end so that the wildcard
  // (*) does not get matched with any other URLs
  {
    path: "/*",
    name: "Not Found",
    component: () =>
      import(
        /* webpackChunkName: "404NotFound" */ "../views/errors/404NotFound.vue"
      )
  }
];

const router = new VueRouter({
  // linkExactActiveClass: "v-tab--active",
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
