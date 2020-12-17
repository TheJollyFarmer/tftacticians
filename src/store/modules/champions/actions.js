import champions from "@/constants/champions";
import types from "./types";
import { getKeys, normalise } from "@/utils/helpers";

export default {
  setChampions({ commit }) {
    commit(types.SET_DATA, normalise(champions, "name"));
    commit(types.SET_KEYS, getKeys(champions, "name"));
  },
  addFilter: ({ commit }, { filter, type }) => commit(types[type], filter),
  removeFilter: ({ commit }, { filter, type }) => commit(types[type], filter),
  resetFilters({ commit }) {
    commit(types.RESET_COST_FILTER);
    commit(types.RESET_ORIGIN_FILTER);
    commit(types.RESET_CLASS_FILTER);
  }
};
