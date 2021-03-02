import champions from "@/constants/champions";
import types from "./types";
import { getKeys, normalise } from "@/utils/helpers";

export default {
  setChampions({ commit }, set) {
    commit(types.SET_DATA, normalise(champions[set], "id"));
    commit(types.SET_KEYS, getKeys(champions[set], "id"));
  },
  addFilter: ({ commit }, { filter, type }) => commit(types[type], filter),
  removeFilter: ({ commit }, { filter, type }) => commit(types[type], filter),
  resetFilters({ commit }) {
    commit(types.RESET_COST_FILTER);
    commit(types.RESET_ORIGIN_FILTER);
    commit(types.RESET_CLASS_FILTER);
  }
};
