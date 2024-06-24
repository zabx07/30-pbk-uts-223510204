// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Todos from "../components/Todos.vue";
import Posts from "../components/Posts.vue";
import Album from "../components/Albums.vue";

const routes = [
  { path: "/todos", component: Todos },
  { path: "/posts", component: Posts },
  { path: "/albums", component: Album },
  { path: "/", redirect: "/todos" }, // Redirect to Todos by default
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
