import { byFilter, byKey, getAdjacentChampion, isActive } from "./filters";
import { getDatum, getDatumProp, mapKeys } from "@/store/helpers/getters";
import { types } from "@/constants/query";

export default {
  getArray: mapKeys("champions"),
  getChampion: getDatum("champions"),
  getChampionCost: getDatumProp("champions", "cost"),
  getChampionName: getDatumProp("champions", "name"),
  getChampionByName: byKey("name"),
  getChampions: byFilter,
  getPrevChampion: getAdjacentChampion("prev"),
  getNextChampion: getAdjacentChampion("next"),
  getFilterTypes: types,
  isActive
};
