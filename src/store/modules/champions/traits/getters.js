import { filterBy, getDatum, isTrue, mapKeys } from "@/store/helpers/getters";
import { byFilter } from "@/store/modules/champions/traits/filters";

export default {
  getTraits: mapKeys("traits"),
  getTrait: getDatum("traits"),
  getOrigins: filterBy("getTraits", "type", "origin"),
  getClasses: filterBy("getTraits", "type", "class"),
  getFilteredTraits: byFilter,
  isActive: isTrue("filter")
};
