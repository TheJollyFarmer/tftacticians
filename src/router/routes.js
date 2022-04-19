import Home from "@/views/HomeView";
import { beforeEnter, beforeQuery } from "@/router/guards";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/summoner/:region/:name",
    name: "summoner",
    component: () => import("../views/SummonerView")
  },
  {
    path: "/champions",
    name: "champions",
    component: () => import("../views/ChampionsView"),
    beforeEnter: (to, _, next) => beforeQuery(to, next)
  },
  {
    path: "/champions/:champion",
    name: "champion",
    props: route => ({ name: route.params.champion }),
    component: () => import("../views/ChampionView"),
    beforeEnter
  },
  {
    path: "/compositions/:composition?",
    name: "compositions",
    meta: { key: "compositions" },
    component: () => import("../views/CompositionsView"),
    beforeEnter
  },
  {
    path: "/items/:item?",
    name: "items",
    meta: { key: "items" },
    component: () => import("../views/ItemsView"),
    beforeEnter
  },
  {
    path: "/traits/:type(classes|origins)?",
    name: "traits",
    meta: { key: "traits", param: "classes" },
    component: () => import("../views/TraitsView"),
    beforeEnter
  },
  {
    path:
      "/leaderboard/:region(euw|na|eune|ru|kr|las|lan|br|jp|oce|tr)?/:league(challenger|grandmaster|master)?",
    name: "leaderboard",
    meta: { key: "leaderboard" },
    component: () => import("../components/leaderboard/LeaderboardView"),
    beforeEnter
  },
  {
    path: "/help",
    name: "help",
    redirect: "/help/set-6",
    meta: { key: "help" },
    component: () => import("../views/help"),
    children: [
      {
        path: "set-6",
        name: "6: gadgets & gizmos",
        component: () => import("../views/help/Set6View")
      },
      {
        path: "set-5-5",
        name: "5.5: dawn of heroes",
        component: () => import("../views/help/Set55View")
      },
      {
        path: "set-5",
        name: "5: the reckoning",
        component: () => import("../views/help/Set5View")
      },
      {
        path: "set-4",
        name: "4: fates",
        component: () => import("../views/help/Set4View")
      },
      {
        path: "set-3",
        name: "3: galaxies",
        component: () => import("../views/help/Set3View")
      },
      {
        path: "Augments",
        name: "augments",
        component: () => import("../views/help/AugmentsView")
      },
      {
        path: "rounds",
        name: "rounds",
        component: () => import("../views/help/RoundsView")
      },
      {
        path: "experience",
        name: "experience",
        component: () => import("../views/help/ExperienceView")
      },
      {
        path: "income",
        name: "income",
        component: () => import("../views/help/IncomeView")
      },
      {
        path: "rolling",
        name: "rolling",
        component: () => import("../views/help/RollingView")
      },
      {
        path: "damage",
        name: "damage",
        component: () => import("../views/help/DamageView")
      },
      {
        path: "Hotkeys",
        name: "hotkeys",
        component: () => import("../views/help/HotkeysView")
      }
    ]
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("../views/PolicyView")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/NotFoundView")
  }
];

export default routes;
