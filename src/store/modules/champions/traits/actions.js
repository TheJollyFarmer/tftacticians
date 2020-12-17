import traits from "@/constants/traits";
import types from "./types";
import { getKeys, normalise } from "@/utils/helpers";

export default {
  setTraits({ commit }) {
    commit(types.SET_DATA, normalise(traits, "name"));
    commit(types.SET_KEYS, getKeys(traits, "name"));
  }
};
