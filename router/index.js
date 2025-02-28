import SearchInput from "@/components/SearchInput.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: SearchInput,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
