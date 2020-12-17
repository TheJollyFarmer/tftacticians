import actions from "./actions";
import champions from "./modules/champions/index";
import compositions from "./modules/compositions/index";
import getters from "./getters";
import items from "./modules/items/index";
import mutations from "./mutations";
import state from "./state";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    champions,
    compositions,
    items
  },

  state,
  actions,
  mutations,
  getters
});
