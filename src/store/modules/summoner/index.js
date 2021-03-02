import actions from "./actions";
import getters from "./getters";
import matches from "./matches/index";
import mutations from "./mutations";
import state from "./state";

export default {
  namespaced: true,

  modules: {
    matches
  },

  state,
  actions,
  mutations,
  getters
};
