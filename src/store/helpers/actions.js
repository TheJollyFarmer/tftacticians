import types from "@/store/helpers/types";
import { getKeys, normalise } from "@/utils/helpers";

export const setState = (data, key = "id") => ({ commit }, set) => {
  commit(types.SET_DATA, normalise(data[set], key));
  commit(types.SET_KEYS, getKeys(data[set], key));
};

export const setQuery = ({ commit }, query) =>
  commit(types.SET_QUERY, query ? query : "");

export const setFilter = ({ commit }, filter) =>
  commit(types.SET_FILTER, filter);
