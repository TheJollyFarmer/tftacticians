import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import traits from "./traits/index";

export default {
  namespaced: true,

  modules: {
    traits
  },

  state,
  actions,
  mutations,
  getters
};
