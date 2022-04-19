import { getDatum, mapKeys } from "@/store/helpers/getters";

export default {
  getCompositions: mapKeys("compositions"),
  getComposition: getDatum("compositions"),
  getActiveComposition: (state, get) => get.getComposition(state.composition)
};
