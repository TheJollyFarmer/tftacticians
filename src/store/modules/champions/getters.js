import { champFilter } from "./filters";
import { getDatum, getDatumProp, mapKeys } from "@/store/helpers/getters";

export default {
  getArray: mapKeys("champions"),
  isActiveItem: state => option =>
    Object.values(state.filters).some(filter => filter.includes(option)),
  getChampion: getDatum("champions"),
  getChampionCost: getDatumProp("champions", "cost"),
  getChampions: (state, getters) => champFilter(state.filters, getters.getArray)
};
