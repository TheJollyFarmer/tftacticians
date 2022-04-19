import champions from "@/data/champions";
import types from "./types";
import { setQuery, setState } from "@/store/helpers/actions";

export default {
  setChampions: setState(champions),
  setQuery,
  addFilter: ({ commit }, filter) => commit(types.ADD_FILTER, filter),
  removeFilter: ({ commit }, filter) => commit(types.REMOVE_FILTER, filter),
  resetFilters: ({ commit }) => commit(types.RESET_FILTERS)
};
