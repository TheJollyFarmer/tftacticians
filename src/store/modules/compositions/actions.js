import compositions from "@/constants/compositions";
import types from "./types";
import { getKeys, normalise } from "@/utils/helpers";

export default {
  setCompositions({ commit, dispatch, state }) {
    commit(types.SET_DATA, normalise(compositions, "name"));
    commit(types.SET_KEYS, getKeys(compositions, "name"));

    dispatch("setComposition", state.keys[0]);
  },

  setComposition: ({ commit }, comp) => commit(types.SET_COMPOSITION, comp)
};