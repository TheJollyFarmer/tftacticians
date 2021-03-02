import Home from "../views/HomeView.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/summoner/:region/:name",
    name: "Summoner",
    component: () => import("../views/SummonerView")
  },
  {
    path: "/champions",
    name: "Champions",
    component: () => import("../views/ChampionsView")
  },
  {
    path: "/champions/:champion",
    name: "Champion",
    props: true,
    component: () => import("../views/ChampionView")
  },
  {
    path: "/compositions",
    name: "Compositions",
    component: () => import("../views/CompositionsView")
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("../views/ItemsView")
  },
  {
    path: "/information",
    name: "Information",
    component: () => import("../views/InformationView")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
