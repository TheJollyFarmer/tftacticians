import items from "@/constants/items";
import types from "./types";
import { getKeys, normalise } from "@/utils/helpers";

export default {
  setItems({ commit }) {
    commit(types.SET_DATA, normalise(items, "name"));
    commit(types.SET_KEYS, getKeys(items, "name"));
  },

  setFilter({ commit, dispatch }, { filter, type }) {
    commit(types.SET_FILTER_ITEM, filter);
    commit(types.SET_FILTER_TYPE, type);
  },

  resetFilter({ commit }) {
    commit(types.RESET_FILTER_ITEM);
    commit(types.RESET_FILTER_TYPE);
  }
};
