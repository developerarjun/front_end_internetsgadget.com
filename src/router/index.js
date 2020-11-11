import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Dashbord from "../views/Home/Dashbord";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin/dashbord",
    name: "Dashbord",
    meta: { requiresAuth: true },
    beforeEnter: guard,
    component: Dashbord,
  }
  ,{        
    path: "/admin/notification",
    name: "Notification",
    component: Home,
    meta: { requiresAuth: true },
    beforeEnter: guard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
function guard(to, from, next){
  if(store.getters.isLoggedIn) {
      next();
  } else{
    next({
      path: '/',
      query: { redirect: to.fullPath }
    }) // go to '/login';
  }
}
export default router;
