import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ProductDetail from "../src/components/ProductDetail.vue"; // Adjust the import path as needed

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:contentType/:id",
    name: "movieDetails",
    component: ProductDetail, // Adjust the component name as needed
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
