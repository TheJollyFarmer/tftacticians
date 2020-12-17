import { itemFilter } from "@/store/modules/items/filters";
import {
  filterBy,
  filterPropExists,
  getDatum,
  getValue,
  mapKeys
} from "@/store/helpers/getters";

export default {
  getArray: mapKeys("items"),
  getItem: getDatum("items"),
  getFilterItem: getValue("filter/item"),
  isActiveItem: state => filter => state.filter.item === filter,
  getComponents: filterBy("getArray", "components"),
  getCombined: filterPropExists("getArray", "components"),
  getComponentItems: (state, getters) => item => itemFilter(item, getters),
  getItems: (state, getters) => itemFilter(state.filter, getters)
};
