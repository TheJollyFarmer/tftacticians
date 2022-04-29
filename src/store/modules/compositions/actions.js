import types from "./types";
import { toTitleCase } from "@/utils/helpers";
import { setState } from "@/store/helpers/actions";

export default {
  setCompositions: setState("compositions", "name"),

  setComposition: ({ commit }, comp) =>
    commit(types.SET_COMPOSITION, toTitleCase(comp))
};
