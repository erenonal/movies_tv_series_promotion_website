import { createRouter, createWebHistory } from "vue-router";
import MovieDetails from "../views/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movieDetails",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
