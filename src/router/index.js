import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Dashbord from "../views/Home/Dashbord";
import store from "../store/index";
import Categories from "../views/Post/Categories";
import NewPost from "../views/Post/NewPost";
import Link from "../views/Post/Links"
import Comments from "../views/Post/Comments"

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
  },
  {
    path: "/post/categories",
    name: "Categories",
    component: Categories,
    meta:{requiresAuth: true},
    beforeEnter: guard
  },
  {
    path: "/post/newposts",
    name: "NewPost",
    component: NewPost,
    meta: {requiresAuth: true},
    beforeEnter: guard
  },
  {
    path: "/post/links",
    name: "Links",
    component: Link,
    meta: {requiresAuth: true},
    beforeEnter: guard
  },
  {
    path: "/post/comments",
    name: "Comments",
    component: Comments,
    meta: {requiresAuth: true},
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
