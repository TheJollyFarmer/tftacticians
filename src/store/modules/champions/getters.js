import { champFilter } from "./filters";
import { getDatum, getDatumProp, mapKeys } from "@/store/helpers/getters";
import { itemByKey } from "@/store/modules/items/filters";

export default {
  getArray: mapKeys("champions"),
  isActiveItem: state => option =>
    Object.values(state.filters).some(filter => filter.includes(option)),
  getChampion: getDatum("champions"),
  getChampionCost: getDatumProp("champions", "cost"),
  getChampionName: getDatumProp("champions", "name"),
  getChampionByName: (state, getters) => key => itemByKey(getters, key, "name"),
  getChampions: (state, getters) => champFilter(state.filters, getters.getArray)
};
