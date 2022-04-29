import routes from "@/router/routes";
import scrollBehavior from "@/router/scroll";
import { beforeEach, beforeResolve, initialiseStore } from "@/router/guards";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  scrollBehavior,
  routes
});

router.beforeEach((to, from, next) => initialiseStore(next));
router.beforeEach((to, from, next) => beforeEach(to, from, next));
router.beforeResolve((to, from, next) => beforeResolve(to, from, next));

export default router;
