import { byFilter, byName, typeFilter, isSpecial } from "./filters";
import { getDatum, getValue, isTrue, mapKeys } from "@/store/helpers/getters";

export default {
  getArray: mapKeys("items"),
  getItem: getDatum("items"),
  getFilterItem: getValue("filter"),
  isActive: isTrue("filter"),
  isSpecial,
  getCombined: typeFilter("combined"),
  getComponents: typeFilter("components"),
  getComponentItems: byFilter,
  getItems: byFilter,
  getItemByName: byName
};
