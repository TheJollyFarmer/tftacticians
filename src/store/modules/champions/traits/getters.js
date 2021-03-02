import { filterBy, getDatum, mapKeys } from "@/store/helpers/getters";

export default {
  getTraits: mapKeys("traits"),
  getTrait: getDatum("traits"),
  getOrigins: filterBy("getTraits", "type", "origin"),
  getClasses: filterBy("getTraits", "type", "class"),
  getCountStyle: state => ({ trait, count }) => {
    let set = state.traits[trait].sets.find(
      set => set.min === count || set.max === count
    );

    return set ? `is-` + set.style : "is-grey";
  }
};
