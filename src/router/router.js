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
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue")
  },
  {
    path: "/blog",
    name: "BlogHome",
    component: () =>
      import(/* webpackChunkName: "blogHome" */ "../views/blog/BlogHome.vue"),
    children: [
      {
        path: "testpost",
        name: "TestPost",
        component: () => import("@/views/blog/posts/TestPost.vue")
      }
    ]
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: () =>
      import(/* webpackChunkName: "sandbox" */ "../views/Sandbox.vue")
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: () =>
  //     import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  // },
  // Policy and other law-related pages
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () =>
      import(
        /* webpackChunkName: "privacyPolicy" */ "../views/policy/PrivacyPolicy.vue"
      )
  },
  {
    path: "/Imprint",
    name: "Imprint",
    component: () =>
      import(/* webpackChunkName: "imprint" */ "../views/policy/Imprint.vue")
  },

  // 404-page needs to be at the end so that the wildcard
  // (*) does not get matched with any other URLs
  // {
  //   path: "/*",
  //   name: "Not Found",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "404NotFound" */ "../views/errors/404NotFound.vue"
  //     )
  // },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  // linkExactActiveClass: "v-tab--active",
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
