import api from "@/api/main";
import types from "@/store/helpers/types";
import { getKeys, normalise } from "@/utils/helpers";

export const setState = (name, key = "id") => ({ commit }, set) => {
  return api.getAsset(set, name).then(file => {
    commit(types.SET_DATA, normalise(file, key));
    commit(types.SET_KEYS, getKeys(file, key));
  });
};

export const setQuery = ({ commit }, query) =>
  commit(types.SET_QUERY, query ? query : "");

export const setFilter = ({ commit }, filter) =>
  commit(types.SET_FILTER, filter);
