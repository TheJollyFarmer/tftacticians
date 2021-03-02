import { itemFilter, itemByKey } from "@/store/modules/items/filters";
import {
  filterBy,
  filterPropExists,
  getDatum,
  getValue,
  isTrue,
  mapKeys
} from "@/store/helpers/getters";

export default {
  getArray: mapKeys("items"),
  getItem: getDatum("items"),
  getFilterItem: getValue("filter/item"),
  isActiveItem: isTrue("filter/item"),
  getComponents: filterBy("getArray", "components"),
  getCombined: filterPropExists("getArray", "components"),
  getItemName: (state, getters) => key => itemByKey(getters, key, "id").name,
  getComponentItems: (state, getters) => item => itemFilter(item, getters),
  getItems: (state, getters) => itemFilter(state.filter, getters)
};
