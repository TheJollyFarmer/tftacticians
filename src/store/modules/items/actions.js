import items from "@/data/items.json";
import types from "./types";
import { setQuery, setState } from "@/store/helpers/actions";

export default {
  setItems: setState(items),

  setFilters({ dispatch }, { item, search }) {
    dispatch("setFilter", item);
    dispatch("setQuery", search);
  },

  setFilter: ({ commit, dispatch, getters, state }, filter) => {
    commit(types.SET_FILTER, getters.getItemByName(filter).id);

    if (getters.isSpecial !== state.isSpecial) commit(types.TOGGLE_SPECIAL);
  },

  toggleSpecial: ({ commit }) => commit(types.TOGGLE_SPECIAL),

  setQuery
};
