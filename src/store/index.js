import actions from "./actions";
import champions from "@/store/modules/champions/index";
import compositions from "@/store/modules/compositions/index";
import getters from "./getters";
import items from "@/store/modules/items/index";
import leaderboard from "@/store/modules/leaderboard/index";
import mutations from "./mutations";
import state from "./state";
import summoner from "@/store/modules/summoner/index";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    champions,
    compositions,
    items,
    leaderboard,
    summoner
  },

  state,
  actions,
  mutations,
  getters
});

export default store;
