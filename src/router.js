import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ProductDetail from "../src/components/ProductDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:contentType/:id",
    name: "movieDetails",
    component: ProductDetail, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
