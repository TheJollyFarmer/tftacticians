import { getDatum, mapKeys } from "@/store/helpers/getters";

export default {
  getCompositions: mapKeys("compositions"),
  getComposition: getDatum("compositions"),
  getActiveComposition: (state, getters) =>
    getters.getComposition(state.composition),
  getHexChampion: state => hex => {
    let champion = state.composition.champions.find(
      champion => champion.position === hex
    );

    return champion[0].name;
  }
};
